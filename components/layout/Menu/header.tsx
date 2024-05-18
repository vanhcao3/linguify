import styles from '@/styles/layout/menu.module.css';
import Link from 'next/link';

interface props {
  title?: string;
  btnTitle?: string;
  href?: string;
  onClick?: () => void;
}

function Header({ title, btnTitle, href, onClick }: props) {
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header-title']}>{title}</div>
      {href && (
        <Link href={href} className={styles['header-btn']}>
          {btnTitle}
        </Link>
      )}
      {onClick && (
        <div className={styles['header-btn']} onClick={onClick}>
          {btnTitle}
        </div>
      )}
    </div>
  );
}

export default Header;
