import { selectConnectionQualityByPeerID, useHMSStore } from '@100mslive/react-sdk';
import { Icons } from '../ui/calls/icons';

interface peer {
  peerId: string;
}

export default function ConnectionQuality(peer: peer) {
  const downlinkQuality = useHMSStore(selectConnectionQualityByPeerID(peer.peerId))?.downlinkQuality;
  // use the score to show some UI!
  return <span>{downlinkQuality == 5 ? <Icons.signalMax className="p-1"/> :
    downlinkQuality == 4 ? <Icons.signalHigh className="p-1"/> :
      downlinkQuality == 3 ? <Icons.signalMedium className="p-1"/> :
        downlinkQuality == 2 ? <Icons.signalLow className="p-1"/> :
          <Icons.signalZero className="p-1"/>}</span>;
}