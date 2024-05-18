'use server';

import { db } from '../lib/db';

export const getUserCourses = async (userId: string) => {
  try {
    const userCourses = await db.userCourse.findMany({
      where: { userId },
    });

    const courses = await Promise.all(
      userCourses.map(async (userCourse) => {
        const course = await db.course.findUnique({
          where: {
            id: userCourse.courseId,
          },
          include: {
            chapters: true,
          },
        });
        if (!course) return null;
        const userProgress = await db.userProgress.findMany({
          where: {
            userId,
            chapterId: {
              in: course.chapters.map((chapter) => chapter.id),
            },
          },
        });

        const totalChapters = course.chapters.length;
        const completedChapters = userProgress.length;
        const progress = (completedChapters / totalChapters) * 100;

        return {
          ...course,
          progress: progress || 0,
        };
      }),
    );
    return courses;
  } catch (error) {
    console.log('[actions/userCourses]', error);
    return null;
  }
};
