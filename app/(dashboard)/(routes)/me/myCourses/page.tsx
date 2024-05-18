import { redirect } from 'next/navigation';

import Item from '@/components/Me/CourseItem';
import styles from '@/styles/Me/MyCourses.module.css';
import { currentUserId } from '@/lib/auth';
import { getUserCourses } from '@/actions/userCourse';

async function MyCourses() {
  const userId = await currentUserId();
  if (!userId) return redirect('/');
  const courses = await getUserCourses(userId);
  if (!courses) return redirect('/');
  return (
    <div className={styles['wrapper']}>
      <div className={styles['section1']}>
        <div className={styles['section1-title']}>
          Khoá học của tôi
        </div>
        <div>bạn đã hoàn thành khác nhiều khoá học</div>
      </div>
      <div className={styles['section2']}>
        {courses.map((course, index) => {
          return <Item key={index} data={course} empty={false} />;
        })}
        <Item empty={true} />
      </div>
    </div>
  );
}

export default MyCourses;
