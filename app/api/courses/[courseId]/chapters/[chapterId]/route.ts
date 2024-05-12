import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentUserId } from '@/lib/auth';
import { getCourseById } from '@/data/courses';

export async function PATCH(
  req: Request,
  {
    params,
  }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();
    const { isPublished, ...values } = await req.json();
    if (!userId) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const ownCourse = await getCourseById(
      params.courseId,
      userId,
    );

    if (!ownCourse) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[COURSES_CHAPTER)ID]', error);
    return new NextResponse('Internal Error', {
      status: 500,
    });
  }
}
