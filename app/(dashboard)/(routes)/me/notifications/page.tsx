import styles from '@/styles/Me/Notification.module.css';
import Header from '@/components/Me/NotificationHeader';

function Notification() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header />
        <div className={styles['body']}>
          <div className="text-sm text-gray-500">
            Bạn chưa có thông báo nào!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
