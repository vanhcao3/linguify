import { getCategories } from '@/data/categories';
import { Categories } from './_components/categories';

const SearchPage = async () => {
  const categories = await getCategories();

  return (
    <div className="p-6">
      <Categories items={categories} />
    </div>
  );
};

export default SearchPage;
