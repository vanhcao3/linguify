'use server';

import { db } from '../lib/db';

export async function getCourses(categoryId: string) {
  const courses = await db.course.findMany({ where: { categoryId } });
  return courses;
}
