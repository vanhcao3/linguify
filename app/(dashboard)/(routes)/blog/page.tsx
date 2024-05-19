import { redirect } from 'next/navigation';

import styles from '@/styles/BLog/Blog.module.css';
import Pagiantion from '@/components/Blog/Pagination';
import Header from '@/components/Blog/Header';
import NoBlog from '@/components/Blog/NoBlog';
import BlogItem from '@/components/Blog/BlogItem';
import { getBlogs } from '@/actions/blogs';
import { getUserById } from '@/data/user';
import { isFavoriteBlog } from '@/actions/blogs';
import { currentUserId } from '@/lib/auth';

interface props {
  searchParams?: { page?: string };
}

async function Blog({ searchParams }: props) {
  // Pagination
  let page = parseInt(searchParams?.page || '1', 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 4;
  // End Pagination

  const data = await getBlogs();
  if (!data) {
    redirect('/');
  }
  const blogOwners = await Promise.all(
    data.map((blog: any) => getUserById(blog.owner)),
  );

  const userId = await currentUserId();
  if (!userId) return redirect('/');

  const favoriteBlogs = await Promise.all(
    data.map((blog: any) => isFavoriteBlog(blog.id, userId)),
  );

  return (
    <div className={styles['wrapper']}>
      <Header />

      {!data.length ? (
        <NoBlog />
      ) : (
        <div className={styles['content']}>
          <div className={styles['section1']}>
            {/* Blogs data from server */}
            {data
              ?.slice(
                perPage * (page - 1),
                perPage * (page - 1) + perPage,
              )
              .map((item: any, index: any) => {
                if (!item.avt) {
                  item.avt = '/images/no-image.png';
                }
                return (
                  <BlogItem
                    key={index}
                    data={item}
                    owner={blogOwners[index]}
                    isFavoriteBlog={favoriteBlogs[index]}
                    currentUserId={userId}
                  />
                );
              })}
            {/* Pagination bar */}
            <Pagiantion
              totalBlogs={data.length}
              page={page}
              perPage={perPage}
            />
          </div>
          <div className={styles['section2']}>
            <div className={styles['section2-header']}>
              Các chủ đề được đề xuất
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Blog;
