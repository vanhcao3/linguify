'use client';

import { LogOut,  } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CourseNavbarRoutes = () => {

  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isStudentPage = pathname?.startsWith('/courses');

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isStudentPage ? (
        <Link href="/">
          <Button size="sm" variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="outline">
            Teacher mode
          </Button>
        </Link>
      )}
    </div>
  );
};
