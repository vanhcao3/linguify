'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import styles from '@/styles/layout/sidebar.module.css';
import Menu from './Menu/menu';

const MENU_BTN = [
  {
    topIcon: '/icons/plusIcon.svg',
    type: 'round',
    items: [
      {
        title: 'Viết blog',
        href: '/blog/create',
      },
      {
        title: 'Tạo khoá học',
        href: '/courses/create',
      },
    ],
  },
  {
    title: 'Trang chủ',
    topIcon: '/icons/homeIcon.svg',
    type: 'square',
    href: '/',
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

function Sidebar() {
  const pathName = usePathname();
  const mePathRegex = /^\/me/;
  if (mePathRegex.test(pathName)) return null;
  return (
    <div className={styles['wrapper']}>
      <div className={styles['menu']}>
        {MENU_BTN.map((data, index) => {
          if (data.href) {
            const isActive = pathName === data.href;

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

          const items = data.items || [];

          return (
            <button
              key={index}
              className={`${styles['btn-wrapper']} ${
                styles[data.type]
              }`}
            >
              {data.topIcon && (
                <Menu type="sidebarMenu" items={items}>
                  <span tabIndex={0} className={styles['inner-icon']}>
                    <Image
                      src={data.topIcon}
                      width={25}
                      height={25}
                      alt={data.title || ''}
                    />
                  </span>
                </Menu>
              )}
              {data.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
