import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import Header from './header';
import styles from '@/styles/layout/menu.module.css';
import { calculateTime } from '@/lib/utils';
import { readAllNotifications } from '@/actions/notifications';

interface props {
  title?: string;
  btnTitle?: string;
  items: Array<any>;
  href?: string;
}

function Notification({ title, btnTitle, items }: props) {
  const router = useRouter();

  const handleClick = () => {
    readAllNotifications();
    toast.success('Đánh dấu thành công!');
    router.refresh();
  };

  return (
    <div className={styles['menu-list']}>
      <Header
        title={title}
        btnTitle={btnTitle}
        onClick={handleClick}
      />
      <div className={styles['body']}>
        {items.map((item, index) => {
          const itemImage = item.image
            ? item.image
            : '/images/no-image.png';
          return (
            <div
              className={styles['notification-wrapper']}
              key={index}
            >
              <div className={styles['notification-image']}>
                <Image
                  src={itemImage}
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
              <div className={styles['notification-body']}>
                <div className={styles['notification-message']}>
                  {item.message}
                </div>
                {item.updatedAt && (
                  <div className={styles['createdTime']}>
                    {`${calculateTime(item.updatedAt)}`}
                  </div>
                )}
              </div>
              {!item.isRead && (
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              )}
            </div>
          );
        })}
      </div>
      <div
        className={styles['view-all-noti']}
        onClick={() => router.push('/me/notification')}
      >
        Xem tất cả thông báo
      </div>
    </div>
  );
}

export default Notification;
