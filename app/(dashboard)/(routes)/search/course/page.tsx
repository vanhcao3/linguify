'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from '@/styles/Search/search.module.css';
import { SearchValueContext } from '../layout';
import { searchAll } from '@/actions/search';
import { useDebounce } from '@/hooks/useDebounce';
import SearchCourseItem from '@/components/Search/SearchCourseItem';

const MENU = [
  {
    title: 'Khóa học',
    type: 'course',
  },
  {
    title: 'Bài viết',
    type: 'blog',
  },
];

interface SearchCourseProps {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  price: number | null;
  isPublished: boolean;
  categoryId: string | null;
  createAt: Date;
  updatedAt: Date;
}

function SearchCourse() {
  const pathname = usePathname();
  const searchValue = useContext(SearchValueContext);
  const [searchCourses, setSearchCourses] = useState<
    SearchCourseProps[]
  >([]);

  const debouncedSearchValue = useDebounce(searchValue, 800);

  useEffect(() => {
    const getBlogs = async () => {
      const courses = await searchAll(debouncedSearchValue);
      setSearchCourses(courses);
    };

    getBlogs();
  }, [debouncedSearchValue]);

  return (
    <div className="flex flex-col gap-6">
      <div className={styles['menu-button']}>
        {MENU.map((item, index) => {
          const href = `/search/${item.type}`;
          const className = `${styles['button']} ${
            pathname === href ? styles['active'] : ''
          }`;
          return (
            <Link href={href} key={index} className={className}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {searchCourses.length === 0
          ? 'Chưa có kết quả nào phù hợp.'
          : searchCourses.map((course, index) => {
              return <SearchCourseItem key={index} {...course} />;
            })}
      </div>
    </div>
  );
}

export default SearchCourse;
