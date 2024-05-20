import Link from 'next/link';
import styles from '@/styles/blog/blog.module.css';

function NoBlog() {
  return (
    <div>
      No post yet. Be the first person to{' '}
      <Link href="/blog/create" className={styles['create-first-blog']}>
        write something
      </Link>
    </div>
  );
}

export default NoBlog;
