import { getChapterById } from '@/data/chapter';
import { getCourseById } from '@/data/courses';
import { getMuxDataByChapterId } from '@/data/mux-data';
import { currentUserId } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const ownCourse = await getCourseById(params.courseId, userId);

    if (!ownCourse) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const chapter = await getChapterById(
      params.chapterId,
      params.courseId,
    );

    const muxData = await getMuxDataByChapterId(params.chapterId);

    if (
      !chapter ||
      !muxData ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    ) {
      return new NextResponse(
        'Bad request: Missing required fields',
        { status: 400 },
      );
    }

    const publishChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishChapter);
  } catch (error) {
    console.log('[CHAPTER_PUBLISH]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
