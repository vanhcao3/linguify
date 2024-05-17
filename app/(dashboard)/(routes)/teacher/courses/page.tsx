import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import { getCoursesByUserId } from '@/data/courses';
import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';

const CoursesPage = async () => {
  const userId = await currentUserId();

  if (!userId) {
    return redirect('/');
  }

  const courses = await getCoursesByUserId(userId);

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
