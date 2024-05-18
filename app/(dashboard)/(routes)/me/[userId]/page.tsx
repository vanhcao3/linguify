import { redirect } from 'next/navigation';

import styles from '@/styles/Me/Profile.module.css';
import Header from '@/components/Me/Profile/Header';
import Introduction from '@/components/Me/Profile/Introduction';
import Activities from '@/components/Me/Profile/Activities';
import CourseItem from '@/components/Me/Profile/CourseItem';
import { calculateTime } from '@/lib/utils';
import { getUserCourses } from '@/actions/userCourse';
import { getUserById } from '@/data/user';

async function Profile({ params }: { params: { userId: string } }) {
  const userId = params.userId;

  const user = await getUserById(userId);
  if (!user) redirect('/');

  const courses = await getUserCourses(userId);
  if (!courses) return redirect('/');

  const time = calculateTime(user.createdAt);

  return (
    <div className={styles['wrapper']}>
      <Header user={user} />
      <div className={styles['body']}>
        <div className={styles['section1']}>
          <Introduction time={time} />
          <Activities />
        </div>
        <div className={styles['section2']}>
          <div className="font-semibold text-lg">
            Các khoá học đã tham gia
          </div>
          <div className="flex flex-col gap-4">
            {courses.length === 0 ? (
              <div>Chưa có khoá học nào.</div>
            ) : (
              courses.map((course: any, index: number) => (
                <CourseItem key={index} data={course} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
