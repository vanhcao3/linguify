import Image from 'next/image';

import styles from '@/styles/Me/Notification.module.css';

interface IProps {
  data: any;
}

function Item(props: IProps) {
  const { data } = props;
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-image']}>
        <Image src={data.image} alt="" width={43} height={43} />
      </div>
      <div className={styles['item-content']}>
        <div>{data.content}</div>
        <div className={styles['created-time']}>{data.createdTime}</div>
      </div>
    </div>
  );
}

export default Item;
