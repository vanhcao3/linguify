import { db } from '@/lib/db';

export const getCourseById = async (id: string) => {
  try {
    const course = await db.course.findUnique({
      where: { id },
      include: {
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
