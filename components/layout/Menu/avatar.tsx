import Image from 'next/image';
import styles from '@/styles/layout/menu.module.css';
import Link from 'next/link';

interface props {
  items: Array<any>;
  userInfo: any;
}

function Avatar({ items, userInfo }: props) {
  return (
    <div className={styles['user-menu-list']}>
      <div className={styles['inner-user-menu']}>
        <div className={styles['userInfo-wrapper']}>
          <div className={styles['userInfo-avt']}>
            <Image
              src={userInfo.image ? userInfo.image : '/no-image.png'}
              width={50}
              height={50}
              alt={userInfo.name}
            />
          </div>
          <div className={styles['userInfo-content']}>
            <div className={styles['userInfo-name']}>
              {userInfo.name}
            </div>
            <div className={styles['userInfo-nickname']}>
              {userInfo.nickname}
            </div>
          </div>
        </div>
        <hr className={styles.hrTag} />
        {items.map((item, index) => {
          if (item.href) {
            return (
              <div key={index} className={styles['item-wrapper']}>
                <Link
                  href={item.href}
                  className={styles['item-title']}
                >
                  {item.title}
                </Link>
                {item.hrTag && <hr className={styles['hrTag']} />}
              </div>
            );
          }
          return (
            <div className={styles['item-wrapper']} key={index}>
              <div className={styles['item-title']}>{item.title}</div>
              {item.hrTag && <hr className={styles['hrTag']} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Avatar;
