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
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const hasPublishedChapter = course.chapters.some(
      (chapter) => chapter.isPublished,
    );

    if (
      !course.title ||
      !course.description ||
      !course.imageUrl ||
      !hasPublishedChapter ||
      !course.categoryId
    ) {
      return new NextResponse(
        'Bad request: Missing required fields',
        { status: 401 },
      );
    }

    const publishCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishCourse);
  } catch (error) {
    console.log('[COURSE_ID_PUBLISH]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
