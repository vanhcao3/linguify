import Image from 'next/image';

import Header from './header';
import styles from '@/styles/layout/menu.module.css';

interface IProps {
  title: string | null;
  btnTitle: string | null;
  items: Array<any>;
  href?: string;
}

function Course(props: IProps) {
  const { title, btnTitle, items, href } = props;
  return (
    <div className={styles['menu-list']}>
      <Header title={title} btnTitle={btnTitle} href={href} />
      <div className={styles['body']}>
        {items.map((item, index) => {
          return (
            <div className={styles['course-wrapper']} key={index}>
              <div className={styles['course-image']}>
                <Image src={item.image} width={120} height={67.5} alt={item.title} />
              </div>
              <div className={styles['course-detail']}>
                <div className={styles['course-title']}>{item.title}</div>
                {item.desc && <div className={styles['course-desc']}>{item.desc}</div>}
                {item.lastComplete && <div className={styles['lastComplete']}>{item.lastComplete}</div>}
                {item.progress && (
                  <div className={styles['progressBar']}>
                    <div className={styles['inProgress']} style={{ width: `${item.progress}%` }}></div>
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
