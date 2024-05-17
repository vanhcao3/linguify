'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import styles from '@/styles/Me/MyCourses.module.css';
import Link from 'next/link';

interface IProps {
  data: any;
  empty: boolean;
}

function Menu(props: IProps) {
  const { data, empty } = props;
  const router = useRouter();

  const handleEmptyItemClick = () => {
    return router.push('/');
  };

  if (empty) {
    return (
      <div className={`${styles['empty-item-wrapper']} group`} onClick={handleEmptyItemClick}>
        <div className={styles['plus-icon']}>
          <Image src="/icons/plusIcon.svg" alt="" width={20} height={20} />
        </div>
        <div className={styles['star-icon1']}>
          <Image src="/icons/starIcon.svg" alt="" width={20} height={20} />
        </div>
        <div className={styles['star-icon2']}>
          <Image src="/icons/starIcon.svg" alt="" width={20} height={20} />
        </div>
        <div></div>
        <div>Thêm khoá học</div>
      </div>
    );
  }
  return (
    <div className={styles['item-wrapper']}>
      {data.image && (
        <div className={styles['item-image']}>
          <Image
            src={data.image}
            alt={data.title}
            width={240}
            height={135}
            // layout="responsive"
            // objectFit="cover"
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
      {data.lastComplete && <div className={styles['last-complete']}>{data.lastComplete}</div>}
      {data.progress && (
        <div className={styles['progress']}>
          <div style={{ width: `${data.progress}%` }} className={styles['progress-bar']}></div>
        </div>
      )}
    </div>
  );
}

export default Menu;
