'use server';

import { db } from '../lib/db';

interface BlogData {
  title: string;
  content: string;
  owner: any;
}

export const createBlog = async (data: BlogData) => {
  return await db.blog.create({
    data: {
      title: data.title,
      content: data.content,
      owner: data.owner,
    },
  });
};
