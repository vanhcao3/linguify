import { z } from "zod"
import { cookies } from 'next/headers'
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { generateManagementToken } from '@/lib/tokens';

const callCreateSchema = z.object({
  callName: z.string().uuid(),
})

interface CallCreateBody {
  callName: string;
}

type Room = {
  id: string;
};

export async function POST(req: Request) {

  try {
    const user = await currentUser()
    if (!user) {
      return new Response("Unauthorized", { status: 403 })
    }

    if (!user || !user.id || !user.name || !user.email) {
      throw new Error('You must be logged in to create a call');
    }


    const json: CallCreateBody = await req.json() as CallCreateBody;
    const body = callCreateSchema.parse(json)
    const roomId = await createRoom(body.callName);
    const existingCall = await db.call.findUnique({
      where: { id: roomId },
    });

    if (existingCall) {
      throw new Error('A call with this ID already exists');
    }
    console.log(db.call);
    const newCall = await db.call.create({
      data: {
        id: roomId,
        name: body.callName,
        userId: user.id,
        title: user.name + "'s Call",
        startTime: new Date(),
        status: 'created',
        endTime: null,
      },
    });
    if (!newCall) {
      throw new Error('Error creating call');
    }
    console.log(newCall);
    const inviteLink = `localhost:3000/call/${newCall.name}`;

    // Update the call with the invite link
    await db.call.update({
      where: { id: newCall.id },
      data: { inviteLink },
    });


    await db.participant.create({
      data: {
        userId: user.id,
        name: user.name,
        email: user.email,
        callName: newCall.name,
        role: 'host',
        status: 'joined',
        callId: newCall.id,
        startTime: new Date(),
      },
    });

    //store room code in session
    cookies().set('room-id', newCall.id)
    cookies().set('room-name', newCall.name)

    return new Response(JSON.stringify({ success: true }));

  } catch (error) {
    console.log(error)
    return new Response(null, { status: 500 })
  }

}

async function createRoom(name: string){
  const managementToken = await generateManagementToken();
  const response = await fetch(`https://api.100ms.live/v2/rooms`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${managementToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      template_id: process.env.TEMPLATE_ID,
      region: 'us'
    })
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { id }: Room = await response.json() as Room;
  return id;
}

