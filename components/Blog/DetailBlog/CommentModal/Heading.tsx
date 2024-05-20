import styles from '@/styles/BLog/CommentModal.module.css';

interface HeadingProps {
  numComments?: number;
}

function Heading({ numComments }: HeadingProps) {
  return (
    <div className={styles['heading']}>
      <div className={styles['count-comments']}>{numComments < 2 ? numComments + ' comment' : numComments + ' comments'}  </div>
    </div>
  );
}

export default Heading;
