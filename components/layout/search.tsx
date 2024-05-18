'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from '@/styles/layout/header.search.module.css';
import { smallSearch } from '@/actions/search';
import ViewAllSearchButton from './ViewAllSearchButton';
import { usePathname } from 'next/navigation';

interface searchResult {
  category: string;
  data: any[];
  type: string;
}

function Search() {
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<searchResult[]>(
    [],
  );
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChangeInput = (e: any) => {
    setSearchValue(e.target.value.trimStart());
  };

  const debounced = useDebounce(searchValue, 800);

  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true);
      const data = await smallSearch(debounced);
      setSearchResult(data);
      setIsLoading(false);
    };

    searchData();
  }, [debounced]);

  const handleRender = () => (
    <div className={styles['tooltip-wrapper']} tabIndex={-1}>
      {isLoading ? (
        <div className={styles['heading']}>
          <Image
            src="/icons/loadingIcon.svg"
            alt=""
            width={16}
            height={16}
            className={styles['loading-icon']}
          />
          &nbsp;Tìm &apos;{searchValue}&apos;
        </div>
      ) : (
        <div className={styles['heading']}>
          <Image
            src="/icons/searchIcon.svg"
            alt=""
            width={16}
            height={16}
          />
          &nbsp;&nbsp;&nbsp;Kết quả tìm kiếm cho &apos;{searchValue}
          &apos;
        </div>
      )}
      {searchResult.length === 0 ? (
        <div>Không có kết quả cho &apos;{searchValue}&apos;</div>
      ) : searchResult[0].data.length === 0 &&
        searchResult[1].data.length === 0 ? (
        <div>Không có kết quả cho &apos;{searchValue}&apos;</div>
      ) : (
        searchResult.map((item, index) => {
          if (item.data.length === 0) return null;
          return (
            <div key={index}>
              <div className="flex flex-row justify-between items-center">
                <div className={styles['content-title']}>
                  {item.category}
                </div>
                <div>
                  <ViewAllSearchButton type={item.type} />
                </div>
              </div>
              <hr className={styles['hrTag']} />
              <div className={styles['content-wrapper']}>
                {item.data.map((subItem: any, index: number) => {
                  const subItemImage = subItem.imageUrl
                    ? subItem.imageUrl
                    : '/images/no-image.png';
                  return (
                    <div
                      key={index}
                      className={styles['item-wrapper']}
                    >
                      <div className={styles['item-image']}>
                        <Image
                          src={subItemImage}
                          alt=""
                          width={33}
                          height={33}
                        />
                      </div>
                      {subItem.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );

  if (pathName.startsWith('/search/')) return null;

  return (
    <HeadlessTippy
      interactive
      visible={showResult && !!searchValue}
      render={handleRender}
      onClickOutside={handleHideResult}
    >
      <div className={styles['search']}>
        <button className={styles['search-icon']}>
          <Image
            src="/icons/searchIcon.svg"
            width={30}
            height={32}
            alt="search"
          />
        </button>
        <input
          ref={inputRef}
          value={searchValue}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              inputRef?.current?.blur();
            }
          }}
          onFocus={() => setShowResult(true)}
          onChange={handleChangeInput}
          placeholder="Tìm kiếm khoá học, bài viết, video, ..."
          className={styles['input']}
        />
        {!!searchValue && !isLoading && (
          <Image
            src="/icons/closeIcon.svg"
            alt=""
            width={16}
            height={16}
            className={styles['close-button']}
            onClick={() => {
              setSearchValue('');
              setSearchResult([]);
              inputRef?.current?.focus();
            }}
          />
        )}

        {isLoading && (
          <Image
            src="/icons/loadingIcon.svg"
            alt=""
            width={16}
            height={16}
            className={styles['loading-icon']}
          />
        )}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
