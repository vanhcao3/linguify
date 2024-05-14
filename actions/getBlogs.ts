'use server';

import { db } from '../lib/db';

export const getBlogs = async () => {
  const blogs = await db.blog.findMany();
  return blogs;
};
