import { db } from '@/lib/db';

export const getMuxDataByChapterId = async (chapterId: string) => {
  try {
    const muxData = await db.muxData.findFirst({
      where: {
        chapterId: chapterId,
      },
    });
    return muxData;
  } catch {
    return null;
  }
};
