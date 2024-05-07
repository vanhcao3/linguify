import Link from 'next/link';
import styles from '@/styles/BLog/Blog.module.css';
import Image from 'next/image';

const pseudoData = [
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'So Sánh Kép Trong Tiếng Anh: Cách Dùng Và Ứng Dụng Trong Các Bài Tập Cụ Thể',
    description:
      'Các cấu trúc so sánh ngang bằng, so sánh hơn kém hay so sánh hơn nhất trong tiếng Anh chắc hẳn không còn xa lạ với các bạn. Tuy nhiên cấu trúc So sánh kép đối với nhiều bạn có vẻ khá mới mẻ hoặc chưa biết cách sử dụng thành thạo được.',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/so-sanh-kep.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: '5 Phút Phân Biệt Nhanh Because Và Because Of',
    description:
      'Because và because of là hai cấu trúc cơ bản và hay gặp trong ngữ pháp Tiếng Anh, các bài thi và trong giao tiếp. Tuy nhiên vẫn còn nhiều người học sử dụng chưa đúng, chưa hài hoà cũng như chưa nắm rõ cách sử dụng và chuyển đổi của hai cấu trúc này.',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/because-va-because-of-6.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Tính Từ Đuôi Ing Và Ed: Chi Tiết Cách Phân Biệt Và Sử Dụng Trong Tiếng Anh',
    description:
      '“He is an interesting person” hay “He is an interested person” là câu đúng? Đều là tính từ có nghĩa là “thú vị” tuy nhiên cặp tính từ đuôi “ing” và “ed” này lại không thể thay thế nhau trong cùng 1 câu. Trong tiếng Anh, có rất nhiều các cặp tính từ “ing” và',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/tinh-tu-duoi-ing-va-ed.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Cấu Trúc Had Better: Đầy Đủ Công Thức Và Cách Dùng Chuẩn Nhất',
    description:
      'Các cấu trúc so sánh ngang bằng, so sánh hơn kém hay so sánh hơn nhất trong tiếng Anh chắc hẳn không còn xa lạ với các bạn. Tuy nhiên cấu trúc So sánh kép đối với nhiều bạn có vẻ khá mới mẻ hoặc chưa biết cách sử dụng thành thạo được.',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/had-better.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Either Or Dùng Như Thế Nào? Phân Biệt Either Or Và Neither Nor',
    description:
      'Either or là một trong những cấu trúc ngữ pháp cơ bản trong tiếng Anh, tuy nhiên lại dễ gây nhầm lẫn nếu bạn không nắm rõ. ',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/either-or.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Neither Nor Là Gì? Toàn Tập Về Cấu Trúc Neither Nor Trong Tiếng Anh',
    description:
      'Neither nor nghĩa là “không … cũng không”, một cấu trúc dùng để diễn đạt ý nghĩa phủ định tuyệt đối. Bài viết dưới đây tổng hợp đầy đủ những lý thuyết về neither nor cùng với cách phân biệt cấu trúc này với những cấu trúc khác. Ngoài ra, Eng Breaking cũng tổng hợp',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/neither-nor.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Cách Đánh Trọng Âm Tiếng Anh: 19 Quy Tắc Đánh Trọng Âm Nhanh Và Chuẩn Nhất',
    description:
      'Cách đánh trọng âm là một kiến thức rất quan trọng giúp cải thiện kỹ năng nói và nghe hiểu tiếng Anh. Để hiểu rõ, bạn cần tìm hiểu kỹ từ khái niệm, các quy tắc đánh trọng âm đối với từ và câu, sau đó vận dụng vào luyện tập với các câu hỏi ',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/cach-danh-trong-am.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Bỏ Túi Cẩm Nang Thông Thạo Cấu Trúc Provide Trong Tiếng Anh',
    description:
      'Provide là động từ hay gặp và có được sử dụng nhiều trong tiếng Anh. Provide khi được kết hợp với các giới từ hoặc trạng từ khác nhau thường cho ra những ý nghĩa khác nhau kèm theo cách sử dụng khác so với từ gốc ban đầu. Chính vì vậy, người học cần',
    image: 'https://engbreaking.com/wp-content/uploads/2023/09/provide-1.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'How much: Hiểu Rõ Cách Dùng, Cấu Trúc Và Phân Biệt Với How Many',
    description: 'https://engbreaking.com/wp-content/uploads/2023/08/how-much.png',
    image: 'https://engbreaking.com/wp-content/uploads/2023/08/how-much.png',
  },
  {
    name: 'TheAnh',
    avt: '/images/dino-logo.png',
    title: 'Câu Điều Kiện Loại 3: Toàn Tập Cấu Trúc, Cách Dùng Và Bài Tập Thực Hành',
    description:
      'Câu điều kiện loại 3 là loại câu được sử dụng khi người nói tưởng tượng ra kết quả của một sự việc/tình huống không có thật trong quá khứ. Có thể nói câu điều kiện loại 3 có cấu trúc phức tạp và có độ khó cao nhất trong nhóm câu điều kiện.',
    image: 'https://engbreaking.com/wp-content/uploads/2023/08/cau-dieu-kien-loai-3.png',
  },
];

function Blog({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  let page = parseInt(searchParams?.page || '1', 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 4;
  const totalPages = Math.ceil(pseudoData.length / perPage);

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
    <div className={styles['wrapper']}>
      <div className={styles['heading']}>
        <div className={styles['heading-title']}>Bài viết nổi bật</div>
        <div className={styles['heading-description']}>
          Tổng hợp các bài viết chia sẻ về kinh nghiệm học online, cách ghi nhớ từng vựng, cấu trúc, ...
        </div>
      </div>

      <div className={styles['content']}>
        <div className="hidden">
          Chưa có bài viết nào. Hãy là người{' '}
          <Link href="./" className={styles['create-first-blog']}>
            viết bài đầu tiên
          </Link>
        </div>
        <div className={styles['section1']}>
          {pseudoData.slice(perPage * (page - 1), perPage * (page - 1) + perPage).map((item, index) => {
            return (
              <div key={index} className={styles['item-wrapper']}>
                <div className={styles['item-header']}>
                  <div className={styles['author']}>
                    <div className={styles['author-avatar']}>
                      <Image src={item.avt} width={25} height={25} alt="" />
                    </div>
                    <div>{item.name}</div>
                  </div>
                  <div className={styles['btn-actions']}>
                    <div className={styles['bookmark-btn']}>
                      <Image src="/icons/bookmarkIcon.svg" alt="" width={24} height={20} />
                    </div>
                    <div className={styles['dots-btn']}>
                      <Image src="/icons/dotsIcon.svg" alt="" width={24} height={24} />
                    </div>
                  </div>
                </div>
                <div className={styles['item-body']}>
                  <div className={styles['item-info']}>
                    <div className={styles['info-title']}>{item.title}</div>
                    <div className={styles['info-description']}>{item.description}</div>
                  </div>
                  {item.image && (
                    <div className={styles['thumb']}>
                      <Image src={item.image} alt="" width={200} height={112} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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

        <div className={styles['section2']}>
          <div className={styles['section2-header']}>Các chủ đề được đề xuất</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
