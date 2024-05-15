import Image from 'next/image';

import Header from './header';
import styles from '@/styles/layout/menu.module.css';
import { useRouter } from 'next/navigation';

interface IProps {
  title?: string;
  btnTitle?: string;
  items: Array<any>;
  href?: string;
}

function Notification(props: IProps) {
  const { title, btnTitle, items, href } = props;
  const router = useRouter();

  return (
    <div className={styles['menu-list']}>
      <Header title={title} btnTitle={btnTitle} href={href} />
      <div className={styles['body']}>
        {items.map((item, index) => {
          return (
            <div
              className={styles['notification-wrapper']}
              key={index}
            >
              <div className={styles['notification-image']}>
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt="logo"
                  // layout="responsive"
                  // objectFit="cover"
                />
              </div>
              <div className={styles['notification-body']}>
                <div>{item.content}</div>
                <div className={styles['createdTime']}>
                  {item.createdTime}
                </div>
              </div>
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
