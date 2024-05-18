import Image from 'next/image';

import styles from '@/styles/Me/Notification.module.css';
import { calculateTime } from '@/lib/utils';

interface props {
  data: any;
}

function Item({ data }: props) {
  const itemImage = data.image ? data.image : '/images/no-image.png';
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-image']}>
        <Image src={itemImage} alt="" width={43} height={43} />
      </div>
      <div className={styles['item-content']}>
        <div className="max-h-[48px] line-clamp-2">
          {data.message}
        </div>
        {data.updatedAt && (
          <div className={styles['created-time']}>
            {`${calculateTime(data.updatedAt)}`}
          </div>
        )}
      </div>
      {!data.isRead && (
        <div className="ml-auto w-2 h-2 rounded-full bg-blue-300 shrink-0"></div>
      )}
    </div>
  );
}

export default Item;
