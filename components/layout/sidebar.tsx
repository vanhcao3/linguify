'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import styles from '@/styles/layout/sidebar.module.css';
import {
  TEACHER_ROUTES,
  STUDENT_ROUTES,
} from '@/data/sidebar-navigation';

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
        })}
      </div>
    </div>
  );
}

export default Sidebar;
