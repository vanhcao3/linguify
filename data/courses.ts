import { db } from '@/lib/db';

export const getCourseById = async (id: string, userId?: string) => {
  try {
    const course = await db.course.findUnique({
      where: {
        id,
        userId,
      },
      include: {
        chapters: {
          orderBy: {
            position: 'asc',
          },
        },
        attachments: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
    return course;
  } catch {
    return null;
  }
};
