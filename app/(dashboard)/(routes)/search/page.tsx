import { getCategories } from '@/data/categories';
import { Categories } from './_components/categories';
import { CoursesList } from '@/components/ui/search/courses-list';
import { SearchInput } from '@/components/layout/search-input';
import { Suspense } from 'react';
import { getCourses } from '@/actions/get-courses';
import { currentUserId } from '@/lib/auth';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const userId = await currentUserId();

  if (!userId) {
    return redirect('/');
  }

  const categories = await getCategories();

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
