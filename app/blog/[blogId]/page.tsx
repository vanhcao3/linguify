'use client';

// import axios from 'axios';
// import useSWR from 'swr';

import styles from '@/styles/Blog/DetailBlog.module.css';
import Content from '@/components/Blog/DetailBlog/Content';
import UserInfo from '@/components/Blog/DetailBlog/UserInfo';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const pseudoData = {
  _id: '663b882bde6256651c10eec8',
  title: 'Câu điều kiện loại 3: Cấu trúc và cách dùng',
  content:
    '<p>Câu điều kiện loại 3&nbsp;là loại câu được sử dụng khi người nói tưởng tượng ra kết quả của một sự việc/tình huống không có thật trong quá khứ.</p><p><br></p><p>Có thể nói câu điều kiện loại 3 có cấu trúc phức tạp và có độ khó cao nhất trong nhóm câu điều kiện. Để tránh bối rối khi sử dụng, các bạn buộc phải nắm rõ kiến thức về câu điều kiện loại 3, sau đó vận dụng vào luyện tập với nhiều dạng bài khác nhau.</p><h2><strong>1. Câu điều kiện loại 3 là gì?</strong></h2><p>Câu điều kiện loại 3 trong ngữ pháp tiếng Anh được gọi là câu điều kiện không có thật trong quá khứ, hay là điều kiện giả định trong quá khứ.</p><p>Dạng câu này sẽ chứa một giả định không thực tế. Khi người nói sử dụng câu điều kiện loại 3, họ thường thể hiện sự tiếc nuối của mình.&nbsp;</p><p>Ví dụ:</p><p>If I had studied harder, I would have passed the exam.</p><p><em>Nếu tôi đã học bài chăm chỉ hơn, thì tôi đã thi đậu rồi.</em></p><p><br></p><p>Câu điều kiện nói chung hay câu điều kiện loại 3 luôn có 2 mệnh đề: Mệnh đề chính (mệnh đề kết quả) và Mệnh đề if (mệnh đề điều kiện). Trong câu, 2 mệnh đề này có thể đổi vị trí cho nhau. Trong trường hợp này, bạn đó chỉ đang tưởng tượng một kết quả không có thật trong quá khứ.</p><p>Ví dụ:&nbsp;</p><p>If the fire alarm hadn’t gone off, it would have been a disaster.&nbsp;</p><p><em>Nếu chuông báo cháy không kêu, nó có thể là một thảm họa.</em></p><h2><strong>2. Cấu trúc câu điều kiện loại 3</strong></h2><p>Câu điều kiện loại 3 cũng như các câu điều kiện khác bao gồm 2 mệnh đề. Một là mệnh đề mô tả điều kiện “nếu” (If), hai là mệnh đề chính “thì”.</p><h3><strong>2.1. Câu khẳng định</strong></h3><ul><li>Cách chia động từ câu điều kiện loại 3:</li></ul><p>Trong mệnh đề “If”, động từ luôn chia ở thì&nbsp;<a href="https://engbreaking.com/thi-qua-khu-hoan-thanh/" rel="noopener noreferrer" target="_blank">QUÁ KHỨ HOÀN THÀNH</a></p><p>Nếu mệnh đề kết quả đứng sau mệnh đề “If”, giữa 2 mệnh đề cần có dấu phẩy “,”</p><ul><li>Cấu trúc câu điều kiện loại 3 khẳng định:</li></ul><p>If + S + had + P2, S + would/should/could/… + have + P2</p><p>S + would/should/could/… + have + P2 + If + S + had + P2</p><ul><li>Ví dụ:</li></ul><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kely could have been there on time if she had woken up on time.&nbsp;&nbsp;</p><p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kely đã có thể tới đây đúng giờ nếu cô ấy thức dậy đúng giờ.</em></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If we had known you were in hospital, we would have visited you.</p><p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nếu chúng tôi biết bạn đã nhập viện thì chúng tôi đã đến thăm bạn rồi.</em></p>',
  avt: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
  name: 'Hoàng Thế Anh',
};

function BlogDetail({ params }: { params: { blogId: string } }) {
  // const { data, error, isLoading } = useSWR(``, fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  return (
    <div className={styles['wrapper']}>
      <UserInfo name={pseudoData.name} avt={pseudoData.avt} />
      <Content title={pseudoData.title} content={pseudoData.content} />
    </div>
  );
}

export default BlogDetail;
