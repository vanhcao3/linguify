import Item from '@/components/Me/CourseItem';
import styles from '@/styles/Me/MyCourses.module.css';
import { currentUserId } from '@/lib/auth';
import { getUserCourses } from '@/actions/userCourse';

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
    progress: 12,
  },
  {
    title: 'Node & ExpressJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
    lastComplete: 'Học cách đây 17 ngày trước',
    progress: 100,
  },
  {
    title: 'Node & ExpressJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
    lastComplete: 'Học cách đây 17 ngày trước',
    progress: 100,
  },
];

async function MyCourses() {
  const userId = await currentUserId();
  let courses = undefined;
  if (userId) {
    courses = await getUserCourses(userId);
  }
  return (
    <div className={styles['wrapper']}>
      <div className={styles['section1']}>
        <div className={styles['section1-title']}>
          Khoá học của tôi
        </div>
        <div>bạn đã hoàn thành khác nhiều khoá học</div>
      </div>
      <div className={styles['section2']}>
        {courses?.map((course, index) => {
          return <Item key={index} data={course} empty={false} />;
        })}
        <Item empty={true} />
      </div>
    </div>
  );
}

export default MyCourses;
