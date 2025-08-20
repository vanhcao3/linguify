import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getCourseById } from '@/data/courses';
import { db } from '@/lib/db';
import { QuizEditor } from './quiz-editor';

export default async function ChapterQuizEditorPage({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) {
  const userId = await currentUserId();
  if (!userId) return redirect('/');
  const ownCourse = await getCourseById(params.courseId, userId);
  if (!ownCourse) return redirect('/');

  const quiz = await db.quiz.findUnique({
    where: { chapterId: params.chapterId },
    include: { questions: { orderBy: { position: 'asc' }, include: { options: true } } },
  });

  return (
    <div className="p-6">
      <QuizEditor courseId={params.courseId} chapterId={params.chapterId} initialQuiz={quiz} />
    </div>
  );
}

