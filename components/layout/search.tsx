'use client';

import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from '@/styles/layout/header.search.module.css';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Delay searchValue when typing
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}

function Search() {
  const [searchValue, setSearchValue] = useState('');
  // const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChangeInput = (e: any) => {
    setSearchValue(e.target.value.trimStart());
  };

  const debounced = useDebounce(searchValue, 800);

  const { data, error, isLoading } = useSWR(
    debounced === '' ? null : `http://localhost:8080/courses?q=${encodeURIComponent(debounced)}`,

    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const handleRender = () => (
    <div className={styles['tooltip-wrapper']} tabIndex={-1}>
      {isLoading ? (
        <div className={styles['heading']}>
          <Image src="/icons/loadingIcon.svg" alt="" width={16} height={16} className={styles['loading-icon']} />
          &nbsp;Tìm &apos;{searchValue}&apos;
        </div>
      ) : (
        <div className={styles['heading']}>
          <Image src="/icons/searchIcon.svg" alt="" width={16} height={16} />
          &nbsp;&nbsp;&nbsp;Kết quả tìm kiếm cho &apos;{searchValue}&apos;
        </div>
      )}
      {data?.length > 0 && (
        <div>
          <div className={styles['content-title']}>Khoá học</div>
          <hr className={styles['hrTag']} />
          <div className={styles['content-wrapper']}>
            {data?.map((course: any) => (
              <div key={course._id} className={styles['item-wrapper']}>
                <div className={styles['item-image']}>
                  <Image src={course.thumbnail} alt="" width={33} height={33} />
                </div>
                {course.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <HeadlessTippy
      interactive
      visible={showResult && !!searchValue}
      // visible={true}
      render={handleRender}
      onClickOutside={handleHideResult}
    >
      <div className={styles['search']}>
        <button className={styles['search-icon']}>
          <Image src="/icons/searchIcon.svg" width={30} height={32} alt="search" />
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
              // setSearchResult([]);
              inputRef?.current?.focus();
            }}
          />
        )}

        {isLoading && (
          <Image src="/icons/loadingIcon.svg" alt="" width={16} height={16} className={styles['loading-icon']} />
        )}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
