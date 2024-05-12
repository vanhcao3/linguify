import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getChapterById } from '@/data/chapter';
import Link from 'next/link';
import { ArrowLeft, LayoutDashboard } from 'lucide-react';
import { IconBadge } from '@/components/icon-badge';
import { ChapterTitleForm } from '@/components/ui/chapters/chapter-title-form';

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const userId = currentUserId;

  if (!userId) {
    return redirect('/');
  }

  const chapter = await getChapterById(
    params.chapterId,
    params.courseId,
  );

  if (!chapter) {
    return redirect('/');
  }

  const requiredFields = [
    chapter.title,
    chapter.description,
    chapter.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields =
    requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <Link
            href={`/teacher/courses/${params.courseId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
          >
            <ArrowLeft className="h-4 m-4 mr-2" />
            Back to edit course
          </Link>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">
                Chapter Creation
              </h1>
              <span className="text-s text-slate-500">
                Complete all fields {completionText}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2>Customizing Chapter</h2>
            </div>
            <div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
