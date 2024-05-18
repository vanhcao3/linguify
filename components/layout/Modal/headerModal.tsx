'use client';

import styles from '@/styles/layout/headerModal.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {
  TEACHER_MENU,
  STUDENT_MENU,
} from '@/data/header-modal-navigation';
import { usePathname } from 'next/navigation';
import path from 'path';

interface IProps {
  userInfo: {
    avt: string;
    name: string;
    nickname: string;
  };
  currentUser: boolean;
  closeModal: () => void;
}

function HeaderModal(props: IProps) {
  const { userInfo, currentUser, closeModal } = props;
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes('/teacher');
  const MENU = isTeacherPage ? TEACHER_MENU : STUDENT_MENU;

  return (
    <div className={styles['wrapper']} onClick={closeModal}>
      <div
        className={styles['content']}
        onClick={(e) => e.stopPropagation()}
      >
        {currentUser && (
          <div className={styles['section1']}>
            <div className={styles['avt']}>
              <Image
                src={userInfo.avt}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className={styles['name']}>{userInfo.name}</div>
          </div>
        )}
        {currentUser && <hr className={styles['hrTag']} />}
        <div className={styles['section2']}>
          {MENU.map((item, index) => (
            <div key={index}>
              {item.visible && (
                <Link
                  href={item.href || '/'}
                  className={styles['item']}
                  onClick={closeModal}
                >
                  <Image
                    src={item.icon || '/images/no-image.png'}
                    alt=""
                    width={24}
                    height={24}
                  />
                  {item.title}
                </Link>
              )}
              {item.hrTag && item.visible && (
                <hr className={styles['hrTag']} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;
