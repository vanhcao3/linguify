import { redirect } from 'next/navigation';

import styles from '@/styles/Me/Notification.module.css';
import Header from '@/components/Me/NotificationHeader';
import Item from '@/components/Me/NotificationItem';
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
          {notifications.length === 0 ? (
            <div className="text-sm text-gray-500">
              Bạn chưa có thông báo nào!
            </div>
          ) : (
            notifications.map((notification) => {
              return (
                <Item key={notification.id} data={notification} />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification;
