'use server';

import { db } from '../lib/db';

export const getComments = async (blogId: string) => {
  try {
    const comments = await db.comment.findMany({ where: { blogId } });
    return comments;
  } catch (error) {
    console.log('[actions/comments]', error);
    return null;
  }
};
