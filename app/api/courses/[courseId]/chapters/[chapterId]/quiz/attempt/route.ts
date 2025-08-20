import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentUserId } from '@/lib/auth';

export async function POST(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();
    if (!userId) return new NextResponse('Unauthorized', { status: 401 });

    const body = await req.json();
    const answers: Array<{ questionId: string; optionId: string }> = body.answers || [];

    const quiz = await db.quiz.findUnique({
      where: { chapterId: params.chapterId },
      include: {
        questions: {
          orderBy: { position: 'asc' },
          include: { options: true },
        },
      },
    });

    if (!quiz) return new NextResponse('Not Found', { status: 404 });

    const questionIdToCorrectOptionId = new Map<string, string>();
    quiz.questions.forEach((q) => {
      const correct = q.options.find((o) => o.isCorrect);
      if (correct) questionIdToCorrectOptionId.set(q.id, correct.id);
    });

    let correctCount = 0;
    for (const { questionId, optionId } of answers) {
      if (questionIdToCorrectOptionId.get(questionId) === optionId) {
        correctCount += 1;
      }
    }

    const totalQuestions = quiz.questions.length || 1;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= quiz.passPercentage;

    const attempt = await db.quizAttempt.create({
      data: {
        quizId: quiz.id,
        userId,
        scorePercent,
        passed,
        answers: {
          create: answers.map((a) => ({
            questionId: a.questionId,
            optionId: a.optionId,
          })),
        },
      },
    });

    if (passed) {
      await db.userProgress.upsert({
        where: {
          userId_chapterId: { userId, chapterId: params.chapterId },
        },
        update: { isCompleted: true },
        create: { userId, chapterId: params.chapterId, isCompleted: true },
      });
    }

    return NextResponse.json({ scorePercent, passed, attemptId: attempt.id });
  } catch (error) {
    console.log('[QUIZ_ATTEMPT_POST]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

