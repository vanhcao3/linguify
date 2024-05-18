import Image from 'next/image';

import styles from '@/styles/Me/Profile.module.css';

interface props {
  data: any;
}

function CourseItem({ data }: props) {
  const courseImage = data.imageUrl
    ? data.imageUrl
    : '/images/no-image.png';
  return (
    <div className={styles['course-item-wrapper']}>
      <div className={styles['course-item-image']}>
        <Image
          src={courseImage}
          alt={data.title}
          width={228}
          height={128}
        />
      </div>
      <div>
        <div className="text-lg font-semibold line-clamp-1">
          {data.title}
        </div>
        <div className="text-sm text-gray-400 line-clamp-5">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
