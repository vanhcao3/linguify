"use client";
import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk';
import React from "react";
import Peer from '../ui/calls/peer';
import { Icons } from "../ui/calls/icons";

export default function LocalConference() {
  const peer = useHMSStore(selectLocalPeer);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (peer) {
      setLoading(false);
    }
  }, [peer]);

  return (
    <div className="w-full conference pt-4">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center gap-4">
            <Icons.spinner color="#fff" width={18} height={18} />
            <p className="text-lg sm:text-xl">Loading...</p>
          </div>

        </div>
      ) : (
        <Peer key={peer!.id} peer={peer!} />
      )}
    </div>
  );
}
