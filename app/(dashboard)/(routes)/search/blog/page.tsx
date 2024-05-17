'use client';

import Link from 'next/link';

import styles from '@/styles/Search/search.module.css';
import { usePathname } from 'next/navigation';

const MENU = [
  {
    title: 'Khóa học',
    type: 'course',
  },
  {
    title: 'Bài viết',
    type: 'blog',
  },
];
function Search() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <div className={styles['menu-button']}>
        {MENU.map((item, index) => {
          const href = `/search/${item.type}`;
          const className = `${styles['button']} ${
            pathname === href ? styles['active'] : ''
          }`;
          return (
            <Link href={href} key={index} className={className}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Search;
