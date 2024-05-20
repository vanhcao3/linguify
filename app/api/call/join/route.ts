import { cookies } from "next/headers"
import { z } from "zod"
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';

const joinCallSchema = z.object({
  username: z.string().optional(),
  callName: z.string().uuid(),
  audio: z.boolean().optional(),
  video: z.boolean().optional(),
})

interface JoinCallBody {
  callName: string;
  username?: string;
  audio?: boolean;
  video?: boolean;
}

export async function POST(req: Request) {

  try {
    const user = await currentUser()
    let userId, userName, userEmail;
    if (user) {
      if (user && user.id && user.name && user.email) {
        userId = user.id;
        userName = user.name;
        userEmail = user.email;
      }
    }

    const json: JoinCallBody = await req.json() as JoinCallBody;
    const body = joinCallSchema.parse(json)
    const call = await db.call.findFirst({
      where: { status: 'created', name: body.callName },
    });

    if (!call || call.status === 'ended') {
      return new Response("Not Found", { status: 404 })
    }

    let participants;
    if (userId) {
      participants = await db.participant.findMany({
        where: { userId: userId, callId: call.id },
      });
    }

    let participant = participants ? participants[0] : null;

    if (!participant) {
      participant = await db.participant.create({
        data: {
          callName: call.name,
          userId: userId || null,
          email: userEmail || null,
          name: body.username || userName || "Guest",
          role: "host",
          status: 'joined',
          callId: call.id,
          startTime: new Date()
        },
      });
    } else {
      participant = await db.participant.update({
        // where: { id: userId },
        where: { id: participant.id },
        data: {
          callName: call.name,
          status: 'joined',
          startTime: new Date()
        },
      });
    }

    cookies().set('room-id', call.id)
    cookies().set('room-name', call.name)

    return new Response(JSON.stringify(participant))

  } catch (error) {
    console.log(error)
    return new Response(null, { status: 500 })
  }

}
