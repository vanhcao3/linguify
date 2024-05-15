'use server';

import { db } from '../lib/db';

export const getCategories = async () => {
  const blogs = await db.category.findMany();
  return blogs;
};
