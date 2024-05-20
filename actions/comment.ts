'use server';

import { db } from '../lib/db';

export const getComments = async (blogId: string) => {
  try {
    const comments = await db.comment.findMany({
      where: { blogId },
      include: { Like: true },
    });
    return comments;
  } catch (error) {
    console.log('[actions/comments]', error);
    return null;
  }
};

export const likeComment = async (
  commentId: string,
  userId: string,
) => {
  try {
    const like = await db.like.create({
      data: {
        commentId,
        userId,
      },
    });
    return like;
  } catch (error) {
    console.log('[actions/comments]', error);
    return null;
  }
};

export const unLikeComment = async (
  commentId: string,
  userId: string,
) => {
  try {
    const like = await db.like.deleteMany({
      where: {
        commentId,
        userId,
      },
    });
    return like;
  } catch (error) {
    console.log('[actions/comments]', error);
    return null;
  }
};
