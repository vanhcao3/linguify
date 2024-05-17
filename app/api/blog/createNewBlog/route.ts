import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentUserId } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { title, content, owner } = await req.json();

    if (!title) {
      return new NextResponse('Bad Request: Title is missing', {
        status: 400,
      });
    }

    if (!content) {
      return new NextResponse('Bad Request: Content is missing', {
        status: 400,
      });
    }

    const blog = await db.blog.create({
      data: {
        title,
        content,
        owner,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log('[createNewBlog]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
