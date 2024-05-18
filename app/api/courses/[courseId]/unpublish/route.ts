import { getCourseById } from '@/data/courses';
import { currentUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const userId = await currentUserId();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const course = await getCourseById(params.courseId, userId);

    if (!course) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const unpublishCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishCourse);
  } catch (error) {
    console.log('[COURSE_ID_UNPUBLISH]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
