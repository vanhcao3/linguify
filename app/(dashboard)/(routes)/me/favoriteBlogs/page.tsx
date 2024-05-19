import Link from 'next/link';

function FavoriteBlogs() {
  return (
    <div className="flex flex-col px-[70px] pt-[30px] gap-[50px]">
      <div className="font-bold text-3xl">Bài viết yêu thích</div>
      <div className="flex flex-col gap-3">
        <div className="text-sm text-gray-600">
          Bạn chưa yêu thích bài viết nào.
        </div>
        <div className="text-sm text-gray-600">
          Bấm vào đây để{' '}
          <Link
            href="/blog"
            className="text-red-500 font-semibold underline"
          >
            xem các bài viết nổi bật
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default FavoriteBlogs;
