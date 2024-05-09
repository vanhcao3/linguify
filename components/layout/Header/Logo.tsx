import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from '@/styles/layout/header.module.css';
import HeaderModal from '@/components/layout/Modal/headerModal';
import GoBackButton from '@/components/GoBackButton';

const userInfo = {
  avt: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
  name: 'Hoàng Thế Anh',
  nickname: '@theanhhoang',
};

const currentUser = true;

function Logo() {
  const [headerModal, setHeaderModal] = useState(false);
  const pathName = usePathname();

  const isHomePage = pathName === '/';

  const openHeaderModal = () => setHeaderModal(true);
  const closeHeaderModal = () => setHeaderModal(false);

  return (
    <div className={styles['logo']}>
      <button className={styles['menu-icon']} onClick={openHeaderModal}>
        <Image src="/icons/menuIcon.svg" width={30} height={30} alt="menuIcon" />
      </button>
      {headerModal && <HeaderModal userInfo={userInfo} currentUser={currentUser} closeModal={closeHeaderModal} />}
      <div className={styles['logo-icon']}>
        <Link href="/">
          <Image src="/images/dino-logo.png" width={38} height={38} alt="logo" />
        </Link>
        {isHomePage && <h4>This is logo-heading</h4>}
      </div>
      {!isHomePage && <GoBackButton />}
    </div>
  );
}

export default Logo;
