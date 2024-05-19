'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment, Suspense } from 'react';
import { logout } from '@/actions/sign-out';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

import styles from '@/styles/layout/header.module.css';
import { SearchInput } from './search-input';
import Menu from './Menu/menu';
import HeaderModal from '@/components/layout/Modal/headerModal';
import GoBackButton from '../GoBackButton';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/use-current-user';

const pseudoNotification = [
  {
    image:
      'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Chào mừng bạn!!!',
    createdTime: '25 ngày trước',
  },
  {
    image:
      'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Hãy học ngay thôi nào!!!',
    createdTime: '5 ngày trước',
  },
];

const USER_MENU = [
  {
    title: 'Post blog',
    hrTag: false,
  },
  {
    title: 'My Post',
    hrTag: true,
  },
  {
    title: 'Favorite Post',
    hrTag: true,
  },
  {
    title: 'Settings',
    hrTag: false,
    href: '/settings'
  },
  {
    title: 'Log out',
    hrTag: false,
    onClick: () => {
      logout();
    }
  },
];

function Header() {
  const currentUser = useCurrentUser();

  const pathName = usePathname();
  const isHomePage = pathName === '/';
  const isNotificationPage = pathName === '/me/notification';
  const isSearchPage = pathName === '/search';

  const isTeacherPage = pathName?.startsWith('/teacher');
  const isStudentPage = pathName?.startsWith('/courses');

  const [headerModal, setHeaderModal] = useState(false);

  const openHeaderModal = () => setHeaderModal(true);
  const closeHeaderModal = () => setHeaderModal(false);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <button
          className={styles['menu-icon']}
          onClick={openHeaderModal}
        >
          <Image
            src="/icons/menuIcon.svg"
            width={30}
            height={30}
            alt="menuIcon"
          />
        </button>
        {headerModal && (
          <HeaderModal
            closeModal={closeHeaderModal}
          />
        )}
        <div>
          <Link href="/">
            <Image
              src="/images/linguify-logo.png"
              width={180}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        {!isHomePage && <GoBackButton />}
      </div>

      <div className={styles['search-bar']}>
        {isSearchPage && (
          <Suspense>
            <SearchInput />
          </Suspense>
        )}
      </div>

      <div className={styles['actions']}>
          <Fragment>
            {isTeacherPage || isStudentPage ? (
              <Link href="/">
                <Button size="sm" variant="outline">
                  Exit teacher mode
                </Button>
              </Link>
            ) : (
              <Link href="/teacher/courses">
                <Button size="sm" variant="outline">
                  Teacher mode
                </Button>
              </Link>
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
              <Menu
                title="Thông Báo"
                btnTitle="Đánh dấu đã đọc"
                type="notification"
                items={pseudoNotification}
              >
                <button className={styles['noti-icon']}>
                  <Image
                    src="/icons/bellIcon.svg"
                    width={30}
                    height={30}
                    alt="bellIcon"
                  />
                </button>
              </Menu>
            )}

            {/* User avatar */}
            <Menu
              title={null}
              btnTitle={null}
              type="avatar"
              items={USER_MENU}
            >
              <div>
                <Image
                  className={styles['user-avatar']}
                  src={currentUser?.image ? currentUser.image : '/images/no-avatar.png'}
                  width={60}
                  height={80}
                  alt="User avatar"
                />
              </div>
            </Menu>
          </Fragment>
      </div>
    </div>
  );
}

export default Header;
