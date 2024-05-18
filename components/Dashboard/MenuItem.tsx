import Image from 'next/image';
import { IoCalendarOutline } from 'react-icons/io5';
import Link from 'next/link';

import { formatMoney } from '@/lib/utils';
import styles from '@/styles/Dashboard/menu.module.css';

interface props {
  title: string;
  imageUrl: string;
  price: number | null;
}

function MenuItem({ title, imageUrl, price }: props) {
  const srcImage = imageUrl ? imageUrl : '/images/no-image.png';
  return (
    <div className={styles['item-wrapper']}>
      {imageUrl && (
        <div className={styles['item-image']}>
          <Image
            src={srcImage}
            alt={title}
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
      {title && (
        <Link href="/learningPath" className={styles['item-title']}>
          {title}
        </Link>
      )}
      {/* {course.enrollers && (
          <div className={styles['enrollers']}>
            <Image
              src="/icons/usersGroupIcon.svg"
              alt=""
              width={20}
              height={20}
            />
            {course.enrollers}
          </div>
        )} */}
      <div className="flex flex-row items-center gap-2">
        <IoCalendarOutline />
        <div className="text-sm">Luôn mở</div>
      </div>
      <div className={styles['price']}>
        {price === null ? 'Free' : formatMoney(price) + 'đ'}
      </div>
    </div>
  );
}

export default MenuItem;
