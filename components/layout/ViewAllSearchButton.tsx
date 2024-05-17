'use client';

import Link from 'next/link';

interface props {
  type: string;
}

function viewAllSearchButton({ type }: props) {
  return (
    <Link
      href={`/search/${type}`}
      className="text-xs text-gray-400 hover:text-orange-500 cursor-pointer"
    >
      Xem thêm
    </Link>
  );
}

export default viewAllSearchButton;
