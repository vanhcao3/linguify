import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
// import { currentUserId } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    // const userId = await currentUserId();

    const { title, content } = await req.json();

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }

    if (!title) {
      return new NextResponse('Bad Request: Title is missing', { status: 400 });
    }

    if (!content) {
      return new NextResponse('Bad Request: Content is missing', { status: 400 });
    }

    const blog = await db.blog.create({
      data: {
        title,
        content,
        // owner: userId,
        owner: '6373f508-458d-42e7-9a29-55f69ca35cca',
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log('[createNewBlog]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
