'use server';

import { db } from '../lib/db';

export const getBlogs = async () => {
  return await db.blog.findMany();
};
