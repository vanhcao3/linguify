
import { z } from "zod"
import { generateManagementToken } from "@/lib/tokens"
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';

const roomCodeSchema = z.object({
  callName: z.string(),
})

interface RoomCodeBody {
  callName: string;
}

type RoomCode = {
  code: string;
};

export async function POST(req: Request) {

  try {
    const user = await currentUser()

    let userId;
    if (user) {
      if (user && user.id) {
        userId = user.id;
      }
    }

    const json: RoomCodeBody = await req.json() as RoomCodeBody;
    const body = roomCodeSchema.parse(json)

    const call = await db.call.findFirst({
      where: { status: 'created', name: body.callName },
    });

    if (!call || call.status === 'ended') {
      return new Response("Not Found", { status: 404 })
    }

    let role = "host";
    if (userId) {
      const participant = await db.participant.findUnique({
        where: { id: userId },
      });
      if (participant) {
        role = participant.role;
      }
    }

    const roomId = call.id;

    const token = await generateManagementToken();
    const response = await fetch(`https://api.100ms.live/v2/room-codes/room/${roomId}/role/${role}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { code }: RoomCode = await response.json() as RoomCode;
    return new Response(JSON.stringify({ code }));

  } catch (error) {
    console.error(error)
    return new Response(null, { status: 500 })
  }
}
