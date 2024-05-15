'use server';

import { db } from '../lib/db';

export const getComments = async (blogId: string) => {
  const comments = await db.comment.findMany({ where: { blogId } });
  return comments;
};
