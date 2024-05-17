import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getChapterById } from '@/data/chapter';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircleIcon,
  Eye,
  LayoutDashboard,
  Video,
} from 'lucide-react';
import { IconBadge } from '@/components/icon-badge';
import { Banner } from '@/components/course-banner';
import { ChapterTitleForm } from '@/components/ui/chapters/chapter-title-form';
import { ChapterDescriptionForm } from '@/components/ui/chapters/chapter-description-form';
import { ChapterAccessForm } from '@/components/ui/chapters/chapter-access-form';
import { ChapterVideoForm } from '@/components/ui/chapters/chapter-video-form';
import { ChapterPublish } from '@/components/ui/chapters/chapter-publish';
import { cn } from '@/lib/utils';

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
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isCompleted = requiredFields.every(Boolean);
  return (
    <>
      {!chapter.isPublished ? (
        <Banner
          variant="warning"
          label="This chapter is a draft. It has not been available to the audience yet"
        />
      ) : (
        <Banner
          variant="success"
          label="This chapter has been published. It is now available to the audience"
        />
      )}
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
                <span
                  className={cn(
                    'flex items-center text-sm text-slate-700 px-2 py-3 border border-slate-200 bg-slate-100 hover:bg-slate-300 rounded-lg transition font-semibold',
                    completedFields === totalFields && 'bg-green-400',
                  )}
                >
                  Complete all fields {completionText}
                  {completedFields === totalFields ? (
                    <CheckCircleIcon className="w-4 h-4 ml-2" />
                  ) : (
                    <AlertCircle className="w-4 h-4 ml-2" />
                  )}
                </span>
              </div>
              <ChapterPublish
                disabled={!isCompleted}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
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
                <ChapterDescriptionForm
                  initialData={chapter}
                  courseId={params.courseId}
                  chapterId={params.chapterId}
                />
              </div>
              <div>
                <div className="flex items-center gap-x-2 pt-3 pb-0">
                  <IconBadge icon={Eye} />
                  <h2 className="text-xl">Access Settings</h2>
                </div>
                <ChapterAccessForm
                  initialData={chapter}
                  courseId={params.courseId}
                  chapterId={params.chapterId}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text">Add a video</h2>
            </div>
            <ChapterVideoForm
              initialData={chapter}
              chapterId={params.chapterId}
              courseId={params.courseId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
