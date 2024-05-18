'use client';
import { Category } from '@prisma/client';
import { CategoryItem } from './category-item';
import { Suspense } from 'react';

interface CategoriesProps {
  items: Category[];
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <Suspense key={item.id}>
          <CategoryItem
            key={item.id}
            label={item.name}
            value={item.id}
          />
        </Suspense>
      ))}
    </div>
  );
};
