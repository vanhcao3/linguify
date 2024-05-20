'use client';
import { selectLocalPeer, selectPeers, selectPeersScreenSharing, useHMSStore } from '@100mslive/react-sdk';
import React from 'react';
import Peer from '../ui/calls/peer';
import { Icons } from '../ui/calls/icons';
import { ScrollArea } from '../ui/scroll-area';
import ScreenSharing from '../ui/calls/screen-sharing';

export default function Conference() {
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  const presenters = useHMSStore(selectPeersScreenSharing);
  const [loading, setLoading] = React.useState(true);
  const [{ pinned, isPinnedScreenSharing }, setPinned] = React.useState({ pinned: localPeer, isPinnedScreenSharing: false });

  React.useEffect(() => {
    if (peers.length > 0) {
      setLoading(false);
    }
  }, [peers]);

  React.useEffect(() => {
    setPinned({ pinned: localPeer, isPinnedScreenSharing: false });
  }, [localPeer,presenters,peers]);
  
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
        <div className={'container flex items-center justify-between gap-4 h-screen w-screen'}>
          {pinned && pinned.id && (
            isPinnedScreenSharing && presenters.length!=0 ? <ScreenSharing peer={pinned}/> : <Peer peer={pinned} />
          )}
          <ScrollArea className={'h-2/3 w-96'}>
            {peers.map((peer, index) => <div key={index} className={'pt-4 pr-4 h-fit w-full cursor-pointer'}
                                             onClick={() => setPinned({ pinned: peer, isPinnedScreenSharing: false })}><Peer key={peer.id} peer={peer} /></div>)}
            {presenters.map((peer, index) => <div key={index} className={'pt-4 pr-4 h-fit w-full cursor-pointer'}
                                                  onClick={() => setPinned({ pinned: peer, isPinnedScreenSharing: true })}><ScreenSharing key={peer.id}
                                                                                                 peer={peer} /></div>)}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
