"use client"
import { selectIsSomeoneScreenSharing, selectScreenShareByPeerID, useHMSStore, useVideo } from '@100mslive/react-sdk';
import Avatar from "./avatar";

interface PeerProps {
  peer: {
    isLocal: boolean;
    name: string;
    id: string;
  }
}

export default function ScreenSharing({ peer }: PeerProps) {

  const isVideoOn = useHMSStore(selectIsSomeoneScreenSharing);
  console.log(useHMSStore(selectScreenShareByPeerID(peer.id)));

  const { videoRef } = useVideo({
    trackId: useHMSStore(selectScreenShareByPeerID(peer.id)).id
  });


  return (
    <div className="relative w-full h-fit rounded-md overflow-hidden">
      {!isVideoOn ? <Avatar name={peer.name} /> : null}
      <span className="z-10 absolute bottom-4 left-4 text-neutral-200 text-sm">{peer.name} {peer.isLocal ? "(You)" : ""}</span>
      <video
        ref={videoRef}
        className="object-contain w-full h-full rounded-md"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}
