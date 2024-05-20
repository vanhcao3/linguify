'use client';

import styles from '@/styles/Me/Notification.module.css';

function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles['header-title']}>Thông báo</div>
      <div className={styles['header-button']}>
        Đánh dấu là đã đọc
      </div>
    </div>
  );
}

export default Header;
