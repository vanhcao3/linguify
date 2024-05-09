import Link from 'next/link';
import styles from '@/styles/BLog/Blog.module.css';

function NoBlog() {
  return (
    <div>
      Chưa có bài viết nào. Hãy là người{' '}
      <Link href="/blog/create" className={styles['create-first-blog']}>
        viết bài đầu tiên
      </Link>
    </div>
  );
}

export default NoBlog;
