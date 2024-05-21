'use client';
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import Cookies from 'js-cookie';
import React from 'react';
import CallFooter from '@/components/call/call-footer';
import Conference from '@/components/call/conference';
import { useParams, useRouter } from 'next/navigation';
import { type RoomCodeResponse } from '@/types/types';
import { extractId } from '@/lib/extract-id';
import toast from 'react-hot-toast';
import { getSession } from 'next-auth/react';


export default function CallPage() {

  const params = useParams();
  const router = useRouter();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  const actions = useHMSActions();
  const roomName = Cookies.get('room-name');
  const roomId = Cookies.get('room-id');
  const joinCall = React.useCallback(async () => {

    if (!roomId) {
      console.error('Room id is not defined');
      return;
    }

    try {
      const roomCodeResponse = await fetch(`/api/call/code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          callName: roomName ? roomName : params.slug,
        }),
      });

      if (roomCodeResponse?.ok) {

        // use room code to fetch auth token
        const codeResponse: RoomCodeResponse = await roomCodeResponse.json() as RoomCodeResponse;

        const roomCode = codeResponse.code;
        const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });
        const session = await getSession();
        if (session && session.user && session.user.name) {
          const userName = session.user.name;
          await hmsActions.join({ userName, authToken });
        } else {
          console.error('Session or user name is not defined');
          toast.error('This call cannot joined. Please try again.');
          router.replace('/calls');
        }
      } else {
        throw new Error('Room code response not OK');
      }

    } catch (error) {
      console.error(error);
      toast.error('This call cannot be joined. Please try again.');
      router.replace('/calls');
    }

  }, [hmsActions, params.slug, router, roomName, roomId]);

  const leaveCall = React.useCallback(async () => {

    const response = await fetch(`/api/call/leave`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        callName: roomName ? roomName : extractId(params.slug as string),
        roomId: roomId,
      }),
    });

    if (!response.ok) {
      toast.error('Your call cannot be left. Please try again.');
    }

    await actions.leave();

  }, [roomName, params.slug, roomId, actions]);

  React.useEffect(() => {
    void joinCall();
  }, [joinCall]);

  React.useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        void leaveCall();
      }
    };

  }, [isConnected, leaveCall]);

  // React.useEffect(() => {
  //   void leaveCall();
  // }, [params]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-neutral-950 text-gray-200">
      <Conference />
      <CallFooter />
    </div>
  );
}
