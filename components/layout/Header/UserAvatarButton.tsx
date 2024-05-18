import Image from 'next/image';

import styles from '@/styles/layout/header.module.css';
import Menu from '../Menu/menu';

interface props {
  user: any;
}

function UserAvatarButton({ user }: props) {
  const href = user.id ? `/me/${user.id}` : '/';
  const userImage = user.image ? user.image : '/images/no-image.png';
  const USER_MENU = [
    {
      title: 'Trang cá nhân',
      hrTag: true,
      href: href,
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

  return (
    <Menu type="avatar" userInfo={user} items={USER_MENU}>
      <div>
        <Image
          className={styles['user-avatar']}
          src={userImage}
          width={32}
          height={32}
          alt={user.name}
        />
      </div>
    </Menu>
  );
}

export default UserAvatarButton;
