import Image from 'next/image';

import styles from '@/styles/Search/courseItem.module.css';

interface props {
  title: string;
  imageUrl: string | null;
  description: string | null;
}

function SearchCourseItem({ title, imageUrl, description }: props) {
  const itemImage = imageUrl ? imageUrl : '/images/no-image.png';
  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']}>
        <Image src={itemImage} alt="" width={280} height={158} />
      </div>
      <div className={styles['detail']}>
        <div className="font-semibold text-2xl line-clamp-2">
          {title}
        </div>
        <div className="h-[60px] text-sm line-clamp-3 shrink-0">
          {description}
        </div>
      </div>
    </div>
  );
}

export default SearchCourseItem;
