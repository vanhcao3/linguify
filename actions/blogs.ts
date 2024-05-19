'use server';

import { db } from '../lib/db';

export const getBlogs = async () => {
  try {
    const blogs = await db.blog.findMany();
    return blogs;
  } catch (error) {
    console.log('[actions/blogs]', error);
    return null;
  }
};
