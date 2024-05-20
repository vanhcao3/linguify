import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getFavoriteBlogs } from '@/actions/blogs';
import { currentUserId } from '@/lib/auth';
import BlogItem from '@/components/Blog/BlogItem';

async function FavoriteBlogs() {
  const userId = await currentUserId();
  if (!userId) redirect('/');

  const favoriteBlogs = await getFavoriteBlogs(userId);
  if (!favoriteBlogs) redirect('/');

  return (
    <div className="flex flex-col px-[20px] md:px-[40px] lg:px-[70px] py-[30px] gap-[50px]">
      <div className="font-bold text-3xl">Bài viết yêu thích</div>
      <div className="flex flex-col gap-3 w-full md:w-[90%] lg:w-[80%] pl-[20px]">
        {favoriteBlogs.length === 0 ? (
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
        ) : (
          favoriteBlogs.map((favoriteBlog) => {
            return (
              <BlogItem
                key={favoriteBlog.id}
                data={favoriteBlog.blog}
                owner={favoriteBlog.user}
                isFavoriteBlog={true}
                currentUserId={userId}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default FavoriteBlogs;
