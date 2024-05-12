import { db } from '@/lib/db';

export const getChapterById = async (
  id: string,
  courseId?: string,
) => {
  try {
    const chapter = await db.chapter.findUnique({
      where: {
        id,
        courseId,
      },
      include: {
        muxData: true,
      },
    });
    return chapter;
  } catch {
    return null;
  }
};
