'use server';

import { db } from '../lib/db';

export const smallSearch = async (searchValue: string) => {
  if (searchValue === '') {
    return [];
  }

  const courses = await db.course.findMany({
    where: { title: { contains: searchValue, mode: 'insensitive' } },
    take: 5,
  });

  const blogs = await db.blog.findMany({
    where: { title: { contains: searchValue } },
  });

  const blogData = blogs.map((blog) => {
    return {
      title: blog.title,
      imageUrl: 'no-image.png',
      blogId: blog.id,
    };
  });

  return [
    {
      category: 'Khoá học',
      data: courses,
      type: 'course',
    },
    {
      category: 'Bài viết',
      data: blogData,
      type: 'blog',
    },
  ];
};

export const searchAll = async (searchValue: string) => {
  if (searchValue === '') {
    return [];
  }

  const courses = await db.course.findMany({
    where: { title: { contains: searchValue, mode: 'insensitive' } },
  });

  return courses;
};
