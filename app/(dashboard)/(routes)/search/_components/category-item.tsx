'use client';

import { cn } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import qs from 'query-string';

interface CategoryItemProps {
  label: string;
  value?: string;
}

export const CategoryItem = ({ label, value }: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const currentCategoryId = params.get('categoryId');
  const currentTitle = params.get('title');

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true },
    );
    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition',
        isSelected && 'border-sky-700 bg-sky-200/20 text-sky-800',
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
};
