'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment, Suspense } from 'react';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

import styles from '@/styles/layout/header.module.css';
import { SearchInput } from './search-input';
import Menu from './Menu/menu';
import HeaderModal from '@/components/layout/Modal/headerModal';
import GoBackButton from '../GoBackButton';
import { useRouter } from 'next/navigation';

const pseudoMyCourse = [
  {
    title: 'HTML, CSS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    lastComplete: 'Học cách đây 4 ngày trước',
    progress: 90,
  },
  {
    title: 'JavaScripts',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
    lastComplete: 'Học cách đây 10 ngày trước',
    progress: 60,
  },
  {
    title: 'ReactJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    lastComplete: 'Học cách đây 3 ngày trước',
    progress: 100,
  },
  {
    title: 'Node & ExpressJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
    lastComplete: 'Học cách đây 17 ngày trước',
    progress: 100,
  },
];

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

const userInfo = {
  avt: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
  name: 'Hoàng Thế Anh',
  nickname: '@theanhhoang',
};

interface HeaderProps {
  currentUser: boolean;
}

function Header({ currentUser }: HeaderProps) {
  const USER_MENU = [
    {
      title: 'Trang cá nhân',
      hrTag: true,
      href: `/me/${userInfo.nickname}`,
    },
    {
      title: 'Viết blog',
      hrTag: false,
    },
    {
      title: 'Bài viết của tôi',
      hrTag: true,
    },
    {
      title: 'Bài viết đã lưu',
      hrTag: true,
    },
    {
      title: 'Cài đặt',
      hrTag: false,
    },
    {
      title: 'Đăng xuất',
      hrTag: false,
    },
  ];

  const pathName = usePathname();
  const isHomePage = pathName === '/';
  const isMyCoursePage = pathName === '/me/myCourses';
  const isNotificationPage = pathName === '/me/notification';
  const isSearchPage = pathName === '/search';

  const isTeacherPage = pathName?.startsWith('/teacher');
  const isStudentPage = pathName?.startsWith('/courses');
  const router = useRouter();

  const [headerModal, setHeaderModal] = useState(false);

  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // const { data, error, isLoading } = useSWR('http://localhost:8080/userCourses', fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  // console.log('fetch userCourses data', data);

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
            userInfo={userInfo}
            closeModal={closeHeaderModal}
            currentUser={currentUser}
          />
        )}
        <div className={styles['logo-icon']}>
          <Link href="/">
            <Image
              src="/images/dino-logo.png"
              width={38}
              height={38}
              alt="logo"
            />
          </Link>
          {isHomePage && <h4>This is logo-heading</h4>}
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
                userInfo={null}
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
              userInfo={userInfo}
              items={USER_MENU}
            >
              <div>
                <Image
                  className={styles['user-avatar']}
                  src="https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4"
                  width={32}
                  height={32}
                  alt="Thế Có Tâm"
                />
              </div>
            </Menu>
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
    </div>
  );
}

export default Header;
