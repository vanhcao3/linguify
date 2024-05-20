import Link from 'next/link';

import styles from '@/styles/BLog/blog.module.css';

interface IProps {
  totalBlogs: number;
  page: number;
  perPage: number;
}

function Pagiantion(props: IProps) {
  const { totalBlogs, page, perPage } = props;

  const totalPages = Math.ceil(totalBlogs / perPage);

  const prePage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pageNumbers: Array<number> = [];
  const offsetNumber = 3;

  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }
  return (
    <div>
      <div className={styles['pagination-wrapper']}>
        <div className={styles['pagination']}>
          {page === 1 ? (
            <div className={styles['button-disabled']}>Previous</div>
          ) : (
            <Link href={`?page=${prePage}`} className={styles['pagination-button']}>
              Previous
            </Link>
          )}

          {pageNumbers.map((pageNumber, index) => (
            <Link
              key={index}
              href={`?page=${pageNumber}`}
              className={`${styles['page-number']} ${page === pageNumber ? styles['active-pagination'] : ''}`}
            >
              {pageNumber}
            </Link>
          ))}

          {page === totalPages ? (
            <div className={styles['button-disabled']}>Next</div>
          ) : (
            <Link href={`?page=${nextPage}`} className={styles['pagination-button']}>
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pagiantion;
