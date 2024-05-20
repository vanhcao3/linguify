import styles from '@/styles/Blog/detailblog.module.css';

interface IProps {
  title: string;
  content: string;
}

function Content(props: IProps) {
  const { title, content } = props;
  return (
    <div className={styles['content-wrapper']}>
      <div className={styles['content-title']}>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default Content;
