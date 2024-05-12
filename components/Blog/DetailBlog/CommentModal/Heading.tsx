import styles from '@/styles/BLog/CommentModal.module.css';

interface HeadingProps {
  numComments: number;
}

function Heading({ numComments }: HeadingProps) {
  return (
    <div className={styles['heading']}>
      <div className={styles['count-comments']}>{numComments} Bình Luận</div>
      <div className={styles['help']}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</div>
    </div>
  );
}

export default Heading;
