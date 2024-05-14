import { db } from '@/lib/db';

export const getBlogById = async (id: string) => {
  try {
    const blog = await db.blog.findUnique({ where: { id } });
    return blog;
  } catch {
    return null;
  }
};
