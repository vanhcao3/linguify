import Image from 'next/image';

import Header from './header';
import styles from '@/styles/layout/menu.module.css';
import { calculateTimeCourse } from '@/lib/utils';

interface props {
  title?: string;
  btnTitle?: string;
  items: Array<any>;
  href?: string;
}

function Course({ title, btnTitle, items, href }: props) {
  return (
    <div className={styles['menu-list']}>
      <Header title={title} btnTitle={btnTitle} href={href} />
      <div className={styles['body']}>
        {items.map((item, index) => {
          if (item.imageUrl === null) {
            item.imageUrl = '/images/no-image.png';
          }
          return (
            <div className={styles['course-wrapper']} key={index}>
              <div className={styles['course-image']}>
                <Image
                  src={item.imageUrl}
                  width={120}
                  height={67.5}
                  alt={item.title}
                />
              </div>
              <div className={styles['course-detail']}>
                <div className={styles['course-title']}>
                  {item.title}
                </div>
                {item.desc && (
                  <div className={styles['course-desc']}>
                    {item.desc}
                  </div>
                )}
                {item.updatedAt && (
                  <div className={styles['lastComplete']}>
                    {calculateTimeCourse(item.updatedAt)}
                  </div>
                )}
                {item.progress !== 0 ? (
                  <div className={styles['progressBar']}>
                    <div
                      className={styles['inProgress']}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                ) : (
                  <div className="text-xs font-semibold text-orange-400">
                    Bắt đầu học
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Course;
