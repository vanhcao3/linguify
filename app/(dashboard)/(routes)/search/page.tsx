import { getCategories } from '@/data/categories';
import { Categories } from './_components/categories';
import { SearchInput } from '@/components/layout/search-input';
import { Suspense } from 'react';

const SearchPage = async () => {
  const categories = await getCategories();

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6">
        <Categories items={categories} />
      </div>
    </>
  );
};

export default SearchPage;
