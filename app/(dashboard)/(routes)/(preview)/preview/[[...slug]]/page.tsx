'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { Icons } from '@/components/ui/calls/icons';
import Link from 'next/link';
import LocalConference from '@/components/call/local-conference';
import {
  useHMSActions,
} from '@100mslive/react-sdk';
import type { RoomCodeResponse } from '@/types/types';
import { getSession } from 'next-auth/react';

export default function CallPreviewPage() {

  const router = useRouter();
  const params = useParams();
  const hmsActions = useHMSActions();
  const roomName = params.slug[0]
  const preview = React.useCallback(async () => {

    try {
      const roomCodeResponse = await fetch(`/api/call/code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          callName: roomName ? roomName : params.slug,
        }),
      })
      console.log(roomCodeResponse);

      if(roomCodeResponse?.ok){

        // use room code to fetch auth token
        const codeResponse: RoomCodeResponse = await roomCodeResponse.json() as RoomCodeResponse;
        const roomCode = codeResponse.code;
        const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode })
        const session = await getSession();
        if(session && session.user && session.user.name){
          const userName = session.user.name;
          await hmsActions.preview({ userName, authToken})
        }
        else {
          console.error("Session or user name is not defined");
          toast.error("This call cannot previewed. Please try again.");
        }
      } else {
        throw new Error("Room code response not OK");
      }

    } catch (error) {
      console.error(error)
      toast.error("This call cannot previewed. Please try again.")
    }

  }, [hmsActions, params.slug, router, roomName]);


  async function joinCall() {
    try {
      const joinResponse = await fetch(`/api/call/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          callName: params.slug[-1] || params.slug[0],
        }),
      });
      if (!joinResponse.ok) {
        throw new Error('Join response not OK');
      }
      router.replace(`/call/${params.slug as string}`);
    } catch (error) {
      console.error('Error during fetch:', error);
      toast.error('This call cannot be joined. Please try again.');
    }
  }

  React.useEffect(() => {
    void preview();
  }, [preview]);

  return (
    <section className="w-full max-w-7xl flex justify-center items-center sm:-mt-20 mx-auto">
      <div className="mx-auto flex flex-col gap-8 w-[330px] sm:w-[370px]">
        <div>
          <Link href="/">
            <Icons.camera height={49} width={60} className="-ml-3 mb-3" />
          </Link>
          <h1 className="text-2xl font-medium tracking-tight mb-0.5">Ready to join?</h1>
        </div>
        <LocalConference />
        <Button
          size="lg"
          type="submit"
          className="whitespace-nowrap w-full mt-6"
          onClick={async () => joinCall()}
        >
          <Icons.join color="white" width={20} height={20} className="mr-2" />
          Join Now
        </Button>
      </div>
    </section>
  );
}

