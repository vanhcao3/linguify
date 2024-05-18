'use client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import styles from '@/styles/Me/Notification.module.css';
import { readAllNotifications } from '@/actions/notifications';

function Header() {
  const router = useRouter();

  const handleClick = () => {
    readAllNotifications();
    toast.success('Đánh dấu thành công!');
    router.refresh();
  };
  return (
    <div className={styles['header']}>
      <div className={styles['header-title']}>Thông báo</div>
      <div className={styles['header-button']} onClick={handleClick}>
        Đánh dấu là đã đọc
      </div>
    </div>
  );
}

export default Header;
