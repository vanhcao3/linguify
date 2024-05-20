import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import styles from '@/styles/BLog/CommentModal.module.css';
import { calculateTimeComment } from '@/lib/utils';
import { likeComment, unLikeComment } from '@/actions/comment';

interface props {
  commentId: string;
  content: string;
  commentOwner: any;
  createdAt: Date;
  updatedAt: Date;
  isLiked: boolean;
  currentUserId: string;
}

function CommentItem({
  commentId,
  content,
  commentOwner,
  createdAt,
  updatedAt,
  isLiked,
  currentUserId,
}: props) {
  const router = useRouter();

  const handleLike = async () => {
    try {
      await likeComment(commentId, currentUserId);
      router.refresh();
    } catch (error) {
      console.log('[CommentItem]', error);
      toast.error('Something went wrong!');
    }
  };

  const handleUnLike = async () => {
    try {
      await unLikeComment(commentId, currentUserId);
      router.refresh();
    } catch (error) {
      console.log('[CommentItem]', error);
      toast.error('Something went wrong!');
    }
  };
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
          {isLiked ? (
            <div
              className="text-blue-500 cursor-pointer"
              onClick={handleUnLike}
            >
              Liked
            </div>
          ) : (
            <div onClick={handleLike} className="cursor-pointer">
              Like
            </div>
          )}
          <div>Reply</div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
