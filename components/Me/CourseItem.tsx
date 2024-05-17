'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Me/MyCourses.module.css';
import { calculateTimeCourse } from '@/lib/utils';

interface props {
  data?: any;
  empty: boolean;
}

function Menu({ data, empty }: props) {
  const router = useRouter();

  if (data?.imageUrl === null) {
    data.imageUrl = '/images/no-image.png';
  }
  const handleEmptyItemClick = () => {
    return router.push('/');
  };

  if (empty) {
    return (
      <div
        className={`${styles['empty-item-wrapper']} group`}
        onClick={handleEmptyItemClick}
      >
        <div className={styles['plus-icon']}>
          <Image
            src="/icons/plusIcon.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className={styles['star-icon1']}>
          <Image
            src="/icons/starIcon.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className={styles['star-icon2']}>
          <Image
            src="/icons/starIcon.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div></div>
        <div>Thêm khoá học</div>
      </div>
    );
  }
  return (
    <div className={styles['item-wrapper']}>
      {data.imageUrl && (
        <div className={styles['item-image']}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={240}
            height={135}
          />
          <Link href="/learningPath">
            <div className={styles['overlay']}>
              <button>Xem khoá học</button>
            </div>
          </Link>
        </div>
      )}
      {data.title && (
        <Link href="/learningPath" className={styles['item-title']}>
          {data.title}
        </Link>
      )}
      {data.updatedAt && (
        <div className={styles['last-complete']}>
          {calculateTimeCourse(data.updatedAt)}
        </div>
      )}
      {data.progress !== 0 ? (
        <div className={styles['progress']}>
          <div
            style={{ width: `${data.progress}%` }}
            className={styles['progress-bar']}
          ></div>
        </div>
      ) : (
        <div className="font-semibold text-orange-500">
          Bắt đầu học
        </div>
      )}
    </div>
  );
}

export default Menu;
