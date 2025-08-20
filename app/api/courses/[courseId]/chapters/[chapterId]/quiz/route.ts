import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentUserId } from '@/lib/auth';
import { getCourseById } from '@/data/courses';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const quiz = await db.quiz.findUnique({
      where: { chapterId: params.chapterId },
      include: {
        questions: {
          orderBy: { position: 'asc' },
          include: { options: true },
        },
      },
    });

    if (!quiz) return NextResponse.json(null);

    const sanitized = {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      passPercentage: quiz.passPercentage,
      questions: quiz.questions.map((q) => ({
        id: q.id,
        prompt: q.prompt,
        options: q.options.map((o) => ({ id: o.id, text: o.text })),
      })),
    };
    return NextResponse.json(sanitized);
  } catch (error) {
    console.log('[QUIZ_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();
    if (!userId) return new NextResponse('Unauthorized', { status: 401 });
    const ownCourse = await getCourseById(params.courseId, userId);
    if (!ownCourse) return new NextResponse('Unauthorized', { status: 401 });

    const body = await req.json();
    const { title, description, passPercentage, questions } = body as {
      title: string;
      description?: string;
      passPercentage: number;
      questions: Array<{ prompt: string; position?: number; options: Array<{ text: string; isCorrect?: boolean }> }>;
    };

    const quiz = await db.quiz.upsert({
      where: { chapterId: params.chapterId },
      update: {
        title,
        description,
        passPercentage,
      },
      create: {
        chapterId: params.chapterId,
        title,
        description,
        passPercentage,
      },
    });

    // Replace questions/options for simplicity
    await db.quizQuestion.deleteMany({ where: { quizId: quiz.id } });

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const createdQ = await db.quizQuestion.create({
        data: {
          quizId: quiz.id,
          prompt: q.prompt,
          position: q.position ?? i + 1,
        },
      });
      for (const opt of q.options) {
        await db.quizOption.create({
          data: {
            questionId: createdQ.id,
            text: opt.text,
            isCorrect: !!opt.isCorrect,
          },
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log('[QUIZ_PUT]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

