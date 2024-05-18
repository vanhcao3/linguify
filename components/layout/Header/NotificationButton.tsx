import Image from 'next/image';

import Menu from '../Menu/menu';
import styles from '@/styles/layout/header.module.css';

const pseudoNotification = [
  {
    image:
      'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Chào mừng bạn!!!',
    createdTime: '25 ngày trước',
  },
  {
    image:
      'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Hãy học ngay thôi nào!!!',
    createdTime: '5 ngày trước',
  },
];

interface props {
  notifications: any;
}

function NotificationButton({ notifications }: props) {
  return (
    <Menu
      title="Thông Báo"
      btnTitle="Đánh dấu đã đọc"
      type="notification"
      items={notifications}
    >
      <button className={styles['noti-icon']}>
        <Image
          src="/icons/bellIcon.svg"
          width={30}
          height={30}
          alt="bellIcon"
        />
      </button>
    </Menu>
  );
}

export default NotificationButton;
