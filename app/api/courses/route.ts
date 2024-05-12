import { NextResponse } from 'next/server';
import { currentUserId } from '@/lib/auth';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const userId = await currentUserId();
    const { title } = await req.json();

    //console.log(title);
    //console.log(userId);

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!title) {
      return new NextResponse('Bad Request: Title is missing', { status: 400 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('[COURSES]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
