import { redirect } from 'next/navigation';

import styles from '@/styles/Me/Notification.module.css';
import Item from '@/components/Me/NotificationItem';
import Header from '@/components/Me/NotificationHeader';
import { currentUserId } from '@/lib/auth';
import { getNotifications } from '@/actions/notifications';

async function Notification() {
  const userId = await currentUserId();
  if (!userId) return redirect('/');

  const notifications = await getNotifications();
  if (!notifications) return redirect('/');

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header />
        <div className={styles['body']}>
          {notifications.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Notification;
