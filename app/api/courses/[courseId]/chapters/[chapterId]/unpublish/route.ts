import {
  getChapterById,
  getPublishedChaptersInCourse,
} from '@/data/chapter';
import { getCourseById } from '@/data/courses';
import { getMuxDataByChapterId } from '@/data/mux-data';
import { currentUserId } from '@/lib/auth';
import NextAuth from 'next-auth';
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

    const unpublishChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: false,
      },
    });

    const publishedChaptersInCourse =
      await getPublishedChaptersInCourse(params.courseId);

    if (!publishedChaptersInCourse?.length) {
      await db.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(unpublishChapter);
  } catch (error) {
    console.log('[CHAPTER_UNPUBLISH]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
