import styles from '@/styles/BLog/Blog.module.css';

function Header() {
  return (
    <div className={styles['heading']}>
      <div className={styles['heading-title']}>Bài viết nổi bật</div>
      <div className={styles['heading-description']}>
        Tổng hợp các bài viết chia sẻ về kinh nghiệm học online, cách ghi nhớ từng vựng, cấu trúc, ...
      </div>
    </div>
  );
}

export default Header;
