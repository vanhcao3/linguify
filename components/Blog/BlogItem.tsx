import Image from 'next/image';

import styles from '@/styles/BLog/Blog.module.css';

interface IProps {
  data: any;
}

function BlogItem(props: IProps) {
  const { data } = props;

  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-header']}>
        <div className={styles['author']}>
          <div className={styles['author-avatar']}>
            <Image src={data.avt} width={25} height={25} alt="" />
          </div>
          <div>{data.name}</div>
        </div>
        <div className={styles['btn-actions']}>
          <div className={styles['bookmark-btn']}>
            <Image src="/icons/bookmarkIcon.svg" alt="" width={24} height={20} />
          </div>
          <div className={styles['dots-btn']}>
            <Image src="/icons/dotsIcon.svg" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className={styles['item-body']}>
        <div className={styles['item-info']}>
          <div className={styles['info-title']}>{data.title}</div>
          <div className={styles['info-description']}>{data.description}</div>
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
