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

export const isFavoriteBlog = async (
  blogId: string,
  userId: string,
) => {
  try {
    const favorite = await db.favoriteBlog.findFirst({
      where: {
        blogId,
        userId,
      },
    });
    return favorite ? true : false;
  } catch (error) {
    console.log('[actions/blogs]', error);
    return false;
  }
};

export const addFavoriteBlog = async (
  blogId: string,
  userId: string,
) => {
  try {
    const favorite = await db.favoriteBlog.create({
      data: {
        blogId,
        userId,
      },
    });
    return favorite;
  } catch (error) {
    console.log('[actions/blogs]', error);
    return null;
  }
};

export const removeFavoriteBlog = async (
  blogId: string,
  userId: string,
) => {
  try {
    const favorite = await db.favoriteBlog.deleteMany({
      where: {
        blogId,
        userId,
      },
    });
    return favorite;
  } catch (error) {
    console.log('[actions/blogs]', error);
    return null;
  }
};
