import styles from '@/styles/layout/menu.module.css';
import Link from 'next/link';

interface IProps {
  title: string | null;
  btnTitle: string | null;
  href?: string;
}

function Header(props: IProps) {
  const { title, btnTitle, href } = props;

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header-title']}>{title}</div>
      <div className={styles['header-btn']}>
        <Link href={href || '/'}>{btnTitle}</Link>
      </div>
    </div>
  );
}

export default Header;
