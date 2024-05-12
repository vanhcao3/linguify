import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
// import { currentUserId } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    // const userId = await currentUserId();

    const { content, blogId, owner } = await req.json();

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }

    if (!content) {
      return new NextResponse('Bad Request: Comment is missing', { status: 400 });
    }

    if (!blogId) {
      return new NextResponse('Bad Request: BlogId is missing', { status: 400 });
    }

    const comment = await db.comment.create({
      data: {
        content,
        owner,
        blogId,
      },
    });
    return NextResponse.json(comment);
  } catch (error) {
    console.log('[addComment]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
