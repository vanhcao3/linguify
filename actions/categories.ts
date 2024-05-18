'use server';

import { db } from '../lib/db';

export const getCategories = async () => {
  try {
    const blogs = await db.category.findMany();
    return blogs;
  } catch (error) {
    console.log('[actions/categories]', error);
    return null;
  }
};
