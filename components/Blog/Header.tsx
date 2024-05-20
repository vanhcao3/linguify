import styles from '@/styles/blog/blog.module.css';

function Header() {
  return (
    <div className={styles['heading']}>
      <div className={styles['heading-title']}>Recent Posts</div>
      <div className={styles['heading-description']}>
        Collection of articles on experiences with online learning, methods for memorizing vocabulary, structures, etc that you may find helpful
      </div>
    </div>
  );
}

export default Header;
