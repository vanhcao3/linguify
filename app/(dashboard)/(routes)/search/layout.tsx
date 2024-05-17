'use client';

import { useState, createContext } from 'react';

import SearchBar from '@/components/Search/SearchBar';
import styles from '@/styles/Search/search.module.css';

export const SearchValueContext = createContext<string>('');

function SearchLayout({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchValueContext.Provider value={searchValue}>
      <div className={styles['wrapper']}>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        {children}
      </div>
    </SearchValueContext.Provider>
  );
}

export default SearchLayout;
