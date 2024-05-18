import { getChapter } from '@/actions/get-chapter';
import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Banner } from '@/components/course-banner';
import { VideoPlayer } from './_components/video-player';

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const userId = await currentUserId();

  if (!userId) {
    return redirect('/');
  }

  const {
    purchase,
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect('/');
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner
          variant="success"
          label="You have completed this chapter."
        />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You must purchase this course to see the content."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
