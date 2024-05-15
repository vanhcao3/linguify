import Image from 'next/image';

import styles from '@/styles/layout/header.module.css';
import Menu from '../Menu/menu';

const userInfo = {
  avt: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
  name: 'Hoàng Thế Anh',
  nickname: '@theanhhoang',
};

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

interface props {
  user: any;
}

function UserAvatarButton({ user }: props) {
  return (
    <Menu type="avatar" userInfo={user} items={USER_MENU}>
      <div>
        <Image
          className={styles['user-avatar']}
          src={user.image}
          width={32}
          height={32}
          alt={user.name}
        />
      </div>
    </Menu>
  );
}

export default UserAvatarButton;
