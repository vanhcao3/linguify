'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import styles from '@/styles/layout/sidebar.module.css';
import Menu from './Menu/menu';
import { BarChart, List } from 'lucide-react';

const STUDENT_ROUTES = [
  {
    title: 'Trang chủ',
    topIcon: '/icons/homeIcon.svg',
    type: 'square',
    href: '/',
  },
  {
    title: 'Browse',
    topIcon: '/icons/compassIcon.svg',
    type: 'square',
    href: '/search',
  },
  {
    title: 'Lộ trình',
    topIcon: '/icons/roadIcon.svg',
    type: 'square',
    href: '/learningPath',
  },
  {
    title: 'Bài viết',
    topIcon: '/icons/blogIcon.svg',
    type: 'square',
    href: '/blog?page=1',
  },
];

const TEACHER_ROUTES = [
  {
    title: 'Courses',
    topIcon: '/icons/listIcon.svg',
    type: 'square',
    href: '/teacher/courses',
  },
  {
    title: 'Analytics',
    topIcon: '/icons/analyticsIcon.svg',
    type: 'square',
    href: '/teacher/analytics',
  },
];

function Sidebar() {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes('/teacher');
  const routes = isTeacherPage ? TEACHER_ROUTES : STUDENT_ROUTES;

  return (
    <div className={styles['wrapper']}>
      <div className={styles['menu']}>
        {routes.map((data, index) => {
          if (data.href) {
            const isActive = pathname === data.href;

            return (
              <Link
                key={index}
                href={data.href}
                className={`${styles['btn-wrapper']} ${
                  styles[data.type]
                } ${isActive ? styles['active'] : ''}`}
              >
                {data.topIcon && (
                  <div className={styles['icon']}>
                    <Image
                      src={data.topIcon}
                      width={25}
                      height={25}
                      alt={data.title}
                    />
                  </div>
                )}
                {data.title}
              </Link>
            );
          }

          //const items = data.items || [];

          // return (
          //   <button key={index} className={`${styles['btn-wrapper']} ${styles[data.type]}`}>
          //     {data.topIcon && (
          //       <Menu title={null} btnTitle={null} type="sidebarMenu" userInfo={null} items={items}>
          //         <span tabIndex={0} className={styles['inner-icon']}>
          //           <Image src={data.topIcon} width={25} height={25} alt={data.title || ''} />
          //         </span>
          //       </Menu>
          //     )}
          //     {data.title}
          //   </button>
          // );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
