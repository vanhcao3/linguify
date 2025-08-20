import { NextResponse } from 'next/server';
import { currentUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import Mux from '@mux/mux-node';
import { getCourseById } from '@/data/courses';

const getMuxVideo = () => {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;
  if (!tokenId || !tokenSecret) return null;
  const { video } = new Mux({ tokenId, tokenSecret });
  return video;
};

export async function DELETE(
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
        userId: userId,
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
      return new NextResponse('Not found', { status: 404 });
    }

    const muxVideo = getMuxVideo();
    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId && muxVideo) {
        await muxVideo.assets.delete(chapter.muxData.assetId);
      }
    }

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log('[COURSE_ID_DELETE]', error);
    return new NextResponse('Internal Server Error', { status: 401 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const userId = await currentUserId();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('[COURSE_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
