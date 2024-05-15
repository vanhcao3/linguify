'use client';

import styles from '@/styles/layout/header.module.css';
import Search from '../search';
import Logo from './Logo';
import Actions from './Actions';

interface props {
  user: any;
}

function Header({ user }: props) {
  return (
    <div className={styles['wrapper']}>
      <Logo />

      <div className={styles['search-bar']}>
        <Search />
      </div>

      <Actions user={user} />
    </div>
  );
}

export default Header;
