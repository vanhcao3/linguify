'use server';

import { db } from '../lib/db';

export async function getCourses(categoryId: string) {
  try {
    const courses = await db.course.findMany({
      where: { categoryId },
    });
    return courses;
  } catch (error) {
    console.log('[actions/courses]', error);
    return null;
  }
}
