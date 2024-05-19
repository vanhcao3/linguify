'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import styles from '@/styles/BLog/Blog.module.css';
import { addFavoriteBlog, removeFavoriteBlog } from '@/actions/blogs';
import { calculateTime } from '@/lib/utils';

interface props {
  data: any;
  owner: any;
  isFavoriteBlog: boolean;
  currentUserId: string;
}

function BlogItem({
  data,
  owner,
  isFavoriteBlog,
  currentUserId,
}: props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${data.id}`);
  };
  const ownerImage = owner.image
    ? owner.image
    : '/images/no-avatar.png';

  const handleAddFavorite = async () => {
    try {
      const res = await addFavoriteBlog(data.id, currentUserId);
      toast.success('Đã thêm vào danh sách yêu thích');
      router.refresh();
    } catch (error) {
      console.log('[UserInfo]', error);
      toast.error('Đã có lỗi xảy ra');
    }
  };
  const handleRemoveFavorite = async () => {
    try {
      const res = await removeFavoriteBlog(data.id, currentUserId);
      toast.success('Đã huỷ yêu thích bài viết');
      router.refresh();
    } catch (error) {
      console.log('[UserInfo]', error);
      toast.error('Đã có lỗi xảy ra');
    }
  };
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-header']}>
        <div className={styles['author']}>
          <div className={styles['author-avatar']}>
            <Image src={ownerImage} width={25} height={25} alt="" />
          </div>
          <div className="font-semibold text-base">{owner.name}</div>
        </div>
        <div className={styles['btn-actions']}>
          <div className={styles['bookmark-btn']}>
            {isFavoriteBlog ? (
              <Image
                src="/icons/solidHeartIcon.svg"
                alt=""
                width={24}
                height={20}
                onClick={handleRemoveFavorite}
              />
            ) : (
              <Image
                src="/icons/heartIcon.svg"
                alt=""
                width={24}
                height={20}
                onClick={handleAddFavorite}
              />
            )}
          </div>
          <div className={styles['dots-btn']}>
            <Image
              src="/icons/dotsIcon.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className={styles['item-body']}>
        <div className={styles['item-info']}>
          <div className={styles['info-title']} onClick={handleClick}>
            {data.title}
          </div>
          <div
            className={styles['info-description']}
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </div>
        {data.image && (
          <div className={styles['thumb']}>
            <Image src={data.image} alt="" width={200} height={112} />
          </div>
        )}
      </div>
      <div className="text-xs text-gray-400">
        {calculateTime(data.updatedAt)}
      </div>
    </div>
  );
}

export default BlogItem;
