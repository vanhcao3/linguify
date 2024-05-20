import Image from 'next/image';

import styles from '@/styles/blog/commentmodal.module.css';

interface props {
  onClick: () => void;
}

function CloseButton({ onClick }: props) {
  return (
    <div className={styles['close-button']} onClick={onClick}>
      <Image src="/icons/closeIcon.svg" alt="" width={24} height={24} />
    </div>
  );
}

export default CloseButton;
