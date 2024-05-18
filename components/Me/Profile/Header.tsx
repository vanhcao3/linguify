import Image from 'next/image';

import styles from '@/styles/Me/Profile.module.css';

interface props {
  user: any;
}

function Header({ user }: props) {
  const avatarImage = user.image
    ? user.image
    : '/images/no-image.png';

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['cover-image']}>
        <Image
          src="/images/profileCoverImage.png"
          alt="cover photo"
          width={1100}
          height={308}
        />
      </div>
      <div className={styles['header-detail']}>
        <div className={styles['avatar-image']}>
          <Image
            src={avatarImage}
            alt={user.name}
            width={160}
            height={160}
          />
        </div>
        <div className="font-semibold text-2xl mt-auto mb-[20px]">
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default Header;
