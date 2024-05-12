import styles from '@/styles/Blog/DetailBlog.module.css';
import Image from 'next/image';
import { useState } from 'react';
import CommentModal from './CommentModal/CommentModal';

interface props {
  name: string;
  avt: string;
  blogId: string;
}

function UserInfo({ name, avt, blogId }: props) {
  const [commentModal, setCommentModal] = useState(false);

  const openCommentModal = () => setCommentModal(true);
  const closeCommentModal = () => setCommentModal(false);
  return (
    <div className={styles['user-info-wrapper']}>
      <div className={styles['user-info-content']}>
        <div className={styles['section1']}>
          <div className={styles['user-info-image']}>
            <Image src={avt} alt="" width={40} height={40} />
          </div>
          <div>{name}</div>
        </div>
        <hr className="my-3" />
        <div className={styles['section2']}>
          <Image src="/icons/heartIcon.svg" alt="" width={24} height={24} />
          <Image src="/icons/commentIcon.svg" alt="" width={24} height={24} onClick={openCommentModal} />
        </div>
      </div>
      {commentModal && <CommentModal closeModal={closeCommentModal} blogId={blogId} />}
    </div>
  );
}

export default UserInfo;
