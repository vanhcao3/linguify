import { Fragment } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from '@/styles/layout/header.module.css';
import NotificationButton from './NotificationButton';
import MyCourseButton from './myCourseButon';
import UserAvatarButton from './UserAvatarButton';

interface props {
  user: any;
  courses: any;
}

function Actions({ user, courses }: props) {
  const pathName = usePathname();
  const currentUser = !!user;

  const isMyCoursePage = pathName === '/me/myCourses';
  const isNotificationPage = pathName === '/me/notification';

  return (
    <div className={styles['actions']}>
      {currentUser ? (
        <Fragment>
          {/* Search btn when screen is small */}
          <button className={styles['search-icon']}>
            <Image
              src="/icons/searchIcon.svg"
              width={32}
              height={32}
              alt="search-icon"
            />
          </button>

          {/* myCourses btn */}
          {isMyCoursePage ? (
            <div className={styles['myCourses-active']}>
              Khoá học của tôi
            </div>
          ) : (
            <MyCourseButton courses={courses} />
          )}

          {/* Notification btn  */}
          {isNotificationPage ? (
            <Image
              src="/icons/activeBellIcon.svg"
              alt=""
              width={30}
              height={30}
            />
          ) : (
            <NotificationButton />
          )}

          {/* User avatar */}
          <UserAvatarButton user={user} />
        </Fragment>
      ) : (
        <Fragment>
          <button
            className={styles['log-in']}
            onClick={() => alert('clicked Login Btn')}
          >
            Đăng nhập
          </button>
          <button
            className={styles['register']}
            onClick={() => alert('clicked register Btn')}
          >
            Đăng ký
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default Actions;
