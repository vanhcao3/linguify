'use client';
import {
  selectIsPeerAudioEnabled,

  selectIsPeerVideoEnabled,
  useHMSActions,
  useHMSStore,
  useVideo,
} from '@100mslive/react-sdk';
import Avatar from './avatar';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../context-menu';
import ConnectionQuality from '../../call/connection-quality';

interface PeerProps {
  peer: {
    videoTrack?: string | undefined;
    isLocal: boolean;
    name: string;
    id: string;
    audioTrack?: string | undefined;
  };
}

export default function Peer({ peer }: PeerProps) {

  const isVideoOn = useHMSStore(selectIsPeerVideoEnabled(peer.id));
  const isAudioOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });
  
  return (
    <div className="relative w-full h-fit rounded-md overflow-hidden">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-full w-full">
          {!isVideoOn ? <Avatar name={peer.name} /> : null}
          <div
            className="flex items-center z-10 absolute bottom-4 left-4 text-neutral-200 text-sm">{peer.name} {peer.isLocal ? '(You)' : ''}
            <ConnectionQuality peerId={peer.id} />
          </div>
          <video
            ref={videoRef}
            className="scale-x-[-1] object-contain w-full h-full rounded-md"
            autoPlay
            muted
            playsInline
          />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset disabled={!isAudioOn}>
            Mute
          </ContextMenuItem>
          <ContextMenuItem inset disabled={isAudioOn}>
            Unmute
          </ContextMenuItem>
          <ContextMenuItem inset>
            Remove Peer
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
