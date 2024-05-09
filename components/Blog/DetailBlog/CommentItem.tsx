import Image from 'next/image';

import styles from '@/styles/BLog/CommentModal.module.css';

interface IProps {
  data: any;
}

function CommentItem(props: IProps) {
  const { data } = props;
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-image']}>
        <Image src={data.avatar} alt="" width={40} height={40} />
      </div>
      <div className={styles['item-content']}>
        <div className={styles['item-name']}>{data.name}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
    </div>
  );
}

export default CommentItem;
