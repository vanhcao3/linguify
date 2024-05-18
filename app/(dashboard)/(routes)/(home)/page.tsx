import { currentUserId } from '@/lib/auth';
import styles from '../../../styles/Dashboard/home.module.css';
import Menu from '@/components/Dashboard/Menu';
import { redirect } from 'next/navigation';
import { getDashboardCourses } from '@/actions/get-dashboard-courses';
import { CoursesList } from '@/components/ui/search/courses-list';
import { CheckCircle2, Clock } from 'lucide-react';
import { InfoCard } from './_components/info-card';

export default async function Dashboard() {
  const userId = await currentUserId();
  if (!userId) {
    return redirect('/');
  }

  const { completedCourses, coursesInProgress } =
    await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle2}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
        />
      </div>
      <CoursesList
        items={[...coursesInProgress, ...completedCourses]}
      />
    </div>
  );
}
