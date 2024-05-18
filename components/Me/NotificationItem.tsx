import Image from 'next/image';

import styles from '@/styles/Me/Notification.module.css';

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
        <div>{data.content}</div>
        <div className={styles['created-time']}>
          {data.createdTime}
        </div>
      </div>
    </div>
  );
}

export default Item;
