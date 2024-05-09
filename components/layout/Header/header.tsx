'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from '@/styles/layout/header.module.css';
import Search from '../search';
import Menu from '../Menu/menu';
import Logo from './Logo';
import Actions from './Actions';

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
    image: 'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Chào mừng bạn!!!',
    createdTime: '25 ngày trước',
  },
  {
    image: 'https://files.fullstack.edu.vn/f8-prod/user_photos/276294/6396eb8215dda.jpg',
    content: 'Hãy học ngay thôi nào!!!',
    createdTime: '5 ngày trước',
  },
];

const userInfo = {
  avt: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
  name: 'Hoàng Thế Anh',
  nickname: '@theanhhoang',
};

const currentUser = true;

function Header() {
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
  const isMyCoursePage = pathName === '/me/myCourses';
  const isNotificationPage = pathName === '/me/notification';

  const [headerModal, setHeaderModal] = useState(false);

  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // const { data, error, isLoading } = useSWR('http://localhost:8080/userCourses', fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  // console.log('fetch userCourses data', data);

  return (
    <div className={styles['wrapper']}>
      <Logo />

      <div className={styles['search-bar']}>
        <Search />
      </div>

      <Actions />
    </div>
  );
}

export default Header;
