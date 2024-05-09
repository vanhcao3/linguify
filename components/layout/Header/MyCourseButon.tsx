import Image from 'next/image';

import Menu from '../Menu/menu';
import styles from '@/styles/layout/header.module.css';

const pseudoMyCourse = [
  {
    title: 'HTML, CSS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    lastComplete: 'Học cách đây 4 ngày trước',
    progress: 90,
  },
  {
    title: 'JavaScripts',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
    lastComplete: 'Học cách đây 10 ngày trước',
    progress: 60,
  },
  {
    title: 'ReactJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    lastComplete: 'Học cách đây 3 ngày trước',
    progress: 100,
  },
  {
    title: 'Node & ExpressJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
    lastComplete: 'Học cách đây 17 ngày trước',
    progress: 100,
  },
];

function MyCourseButton() {
  return (
    <Menu
      title="Khoá học của tôi"
      btnTitle="Xem tất cả"
      href="/me/myCourses"
      type="course"
      items={pseudoMyCourse}
      userInfo={null}
    >
      <div>
        <button className="font-semibold">Khoá học của tôi</button>
      </div>
    </Menu>
  );
}

export default MyCourseButton;
