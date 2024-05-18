'use client';

import Image from 'next/image';

import styles from '@/styles/BLog/Blog.module.css';
import { useRouter } from 'next/navigation';

interface props {
  data: any;
  owner: any;
}

function BlogItem({ data, owner }: props) {
  const router = useRouter();
  const ownerImage = owner.image
    ? owner.image
    : '/images/no-image.png';
  const handleClick = () => {
    router.push(`/blog/${data.id}`);
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
            <Image
              src="/icons/bookmarkIcon.svg"
              alt=""
              width={24}
              height={20}
            />
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
    </div>
  );
}

export default BlogItem;
