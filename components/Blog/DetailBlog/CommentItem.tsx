import Image from 'next/image';

import styles from '@/styles/BLog/commentmodal.module.css';
import { calculateTimeComment } from '@/lib/utils';

interface props {
  content: string;
  commentOwner: any;
  createdAt: Date;
  updatedAt: Date;
}

function CommentItem({
  content,
  commentOwner,
  createdAt,
  updatedAt,
}: props) {
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-image']}>
        <Image
          src={
            commentOwner?.image
              ? commentOwner?.image
              : '/images/no-avatar.png'
          }
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className={styles['item-content']}>
        <div className={styles['item-name']}>
          {commentOwner?.name}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles['item-comment']}
        ></div>
        <div className={styles['item-actions']}>
          <div>{calculateTimeComment(createdAt, updatedAt)}</div>
          <div>Like</div>
          <div>Reply</div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
