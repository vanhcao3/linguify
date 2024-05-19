'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import styles from '@/styles/Blog/DetailBlog.module.css';
// import CommentModal from './CommentModal/CommentModal';
const CommentModal = dynamic(
  () => import('./CommentModal/CommentModal'),
);

interface props {
  name: string;
  avt: string;
  blogId: string;
  currentUser: any;
  comments: any[];
  commentsOwner: any[];
  isFavorite: boolean;
}

function UserInfo({
  name,
  avt,
  blogId,
  currentUser,
  comments,
  commentsOwner,
  isFavorite,
}: props) {
  const [commentModal, setCommentModal] = useState(false);

  const openCommentModal = () => setCommentModal(true);
  const closeCommentModal = () => setCommentModal(false);
  return (
    <div className={styles['user-info-wrapper']}>
      <div className={styles['user-info-content']}>
        <div className={styles['section1']}>
          <div className={styles['user-info-image']}>
            <Image src={avt} alt="avatar" width={50} height={50} />
          </div>
          <div>{name}</div>
        </div>
        <hr className="my-3" />
        <div className={styles['section2']}>
          {isFavorite ? (
            <Image
              src="/icons/solidHeartIcon.svg"
              alt=""
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icons/heartIcon.svg"
              alt=""
              width={24}
              height={24}
            />
          )}
          <Image
            src="/icons/commentIcon.svg"
            alt=""
            width={24}
            height={24}
            onClick={openCommentModal}
          />
        </div>
      </div>
      {commentModal && (
        <CommentModal
          closeModal={closeCommentModal}
          blogId={blogId}
          currentUser={currentUser}
          comments={comments}
          commentsOwner={commentsOwner}
        />
      )}
    </div>
  );
}

export default UserInfo;
