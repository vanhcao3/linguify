import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import Mux from '@mux/mux-node';
import { currentUserId } from '@/lib/auth';
import { getCourseById } from '@/data/courses';
import {
  getChapterById,
  getPublishedChaptersInCourse,
} from '@/data/chapter';
import { getMuxDataByChapterId } from '@/data/mux-data';

const getMuxVideo = () => {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;
  if (!tokenId || !tokenSecret) return null;
  const { video } = new Mux({ tokenId, tokenSecret });
  return video;
};

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();
    if (!userId) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const ownCourse = await getCourseById(params.courseId, userId);

    if (!ownCourse) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const chapter = await getChapterById(
      params.chapterId,
      params.courseId,
    );

    if (!chapter) {
      return new NextResponse('Not Found', { status: 404 });
    }

    if (chapter.videoUrl) {
      const existingMuxData = await getMuxDataByChapterId(
        params.chapterId,
      );

      const muxVideo = getMuxVideo();
      if (existingMuxData && muxVideo) {
        await muxVideo.assets.delete(existingMuxData.assetId);
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }
    }

    const deletedChapter = await db.chapter.delete({
      where: {
        id: params.chapterId,
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

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log('CHAPTER_ID_DELETE', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const userId = await currentUserId();
    const { isPublished, ...values } = await req.json();
    if (!userId) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const ownCourse = await getCourseById(params.courseId, userId);

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

    if (values.videoUrl) {
      const muxVideo = getMuxVideo();
      if (!muxVideo) {
        return new NextResponse('MUX not configured', { status: 500 });
      }
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId: params.chapterId,
        },
      });

      if (existingMuxData) {
        await muxVideo.assets.delete(existingMuxData.assetId);
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      const asset = await muxVideo.assets.create({
        input: values.videoUrl,
        playback_policy: ['public'],
        "encoding_tier": "baseline",
        test: false,
      });

      await db.muxData.create({
        data: {
          chapterId: params.chapterId,
          assetId: asset.id,
          playbackId: asset.playback_ids?.[0].id,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[COURSES_CHAPTER)ID]', error);
    return new NextResponse('Internal Server Error', {
      status: 500,
    });
  }
}
