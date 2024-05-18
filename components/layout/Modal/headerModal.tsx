import styles from '@/styles/layout/headerModal.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface props {
  userInfo: {
    avt: string;
    name: string;
    nickname: string;
  };
  currentUser: boolean;
  closeModal: () => void;
}

function headerModal({ userInfo, currentUser, closeModal }: props) {
  const userImage = userInfo.avt
    ? userInfo.avt
    : '/images/no-image.png';
  const profileHref = userInfo.nickname
    ? `/me/${userInfo.nickname}`
    : '/';
  const MENU = [
    {
      title: 'Đăng nhập',
      icon: '/icons/fadeLoginIcon.svg',
      hrTag: true,
      href: `/sign-in`,
      visible: !currentUser,
    },
    {
      title: 'Trang cá nhân',
      icon: '/icons/user.svg',
      hrTag: false,
      href: profileHref,
      visible: currentUser,
    },
    {
      title: 'Khoá học của tôi',
      hrTag: false,
      icon: '/icons/bookOpenIcon.svg',
      href: 'me/myCourses',
      visible: currentUser,
    },
    {
      title: 'Viết Blog',
      hrTag: true,
      icon: '/icons/penIcon.svg',
      href: 'blog/create',
      visible: currentUser,
    },
    {
      title: 'Trang chủ',
      hrTag: false,
      icon: '/icons/fadeHomeIcon.svg',
      href: '/',
      visible: true,
    },
    {
      title: 'Lộ trình',
      hrTag: false,
      icon: '/icons/fadeRoadIcon.svg',
      href: '/learningPath',
      visible: true,
    },
    {
      title: 'Blog',
      hrTag: true,
      icon: '/icons/fadeBlogIcon.svg',
      href: '/blog?page=1',
      visible: true,
    },
    {
      title: 'Bài viết đã lưu',
      hrTag: true,
      icon: '/icons/fadeBookmarkIcon.svg',
      visible: currentUser,
    },
    {
      title: 'Giới thiệu',
      hrTag: false,
      icon: '/icons/fadeInfoCircleIcon.svg',
      visible: true,
    },
    {
      title: 'Cài đặt',
      hrTag: currentUser,
      icon: '/icons/fadeGearIcon.svg',
      visible: true,
    },
    {
      title: 'Đăng xuất',
      hrTag: false,
      icon: '/icons/fadeLogoutIcon.svg',
      href: '/sign-out',
      visible: currentUser,
    },
  ];

  return (
    <div className={styles['wrapper']} onClick={closeModal}>
      <div
        className={styles['content']}
        onClick={(e) => e.stopPropagation()}
      >
        {currentUser && (
          <div className={styles['section1']}>
            <div className={styles['avt']}>
              <Image src={userImage} alt="" width={40} height={40} />
            </div>
            <div className={styles['name']}>{userInfo.name}</div>
          </div>
        )}
        {currentUser && <hr className={styles['hrTag']} />}
        <div className={styles['section2']}>
          {MENU.map((item, index) => {
            const itemIcon = item.icon
              ? item.icon
              : '/images/no-image.png';
            return (
              <div key={index}>
                {item.visible && (
                  <Link
                    href={item.href || '/'}
                    className={styles['item']}
                    onClick={closeModal}
                  >
                    <Image
                      src={itemIcon}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default headerModal;
