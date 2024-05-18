import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';

const deleteSchema = z.object({
  callId: z.string().min(8),
  path: z.string().min(2),
});

interface DeleteCallBody {
  callId: string;
  path: string;
}

export async function POST (req: Request) {

  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 403 })
  }

  const json: DeleteCallBody = await req.json() as DeleteCallBody;
  const { callId, path } = deleteSchema.parse(json)

  try {
    await db.call.delete({
      where: {
        id: callId,
        userId: user.id,
      },
    });

    revalidatePath(path);
    return NextResponse.json({success: true });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Call could not be created." });
  }
}
