import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from '@/styles/GoBackButton.module.css';

function GoBackButton() {
  const router = useRouter();

  const handleClick = () => router.back();
  return (
    <button onClick={handleClick} className={styles['wrapper']}>
      <Image src="/icons/angleLeftIcon.svg" alt="" width={22} height={22}></Image>
      Quay lại
    </button>
  );
}

export default GoBackButton;
