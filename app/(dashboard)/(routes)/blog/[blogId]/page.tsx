import { redirect } from 'next/navigation';

import styles from '@/styles/Blog/DetailBlog.module.css';
import Content from '@/components/Blog/DetailBlog/Content';
import UserInfo from '@/components/Blog/DetailBlog/UserInfo';
import { getBlogById } from '@/data/blog';
import { getUserById } from '@/data/user';
import { getComments } from '@/actions/comment';
import { currentUserId } from '@/lib/auth';

interface props {
  params: { blogId: string };
}

async function BlogDetail({ params }: props) {
  const userId = await currentUserId();
  if (!userId) return redirect('/');

  const currentUser = await getUserById(userId);
  if (!currentUser) return redirect('/');

  const currentBlog = await getBlogById(params.blogId);
  if (!currentBlog) return redirect('/');

  const comments = await getComments(params.blogId);
  if (!comments) return redirect('/');

  const commentsOwner = await Promise.all(
    comments.map((comment) => getUserById(comment.owner)),
  );

  const owner = await getUserById(currentBlog.owner);
  if (!owner) return redirect('/');

  const isFavorite = true;

  return (
    <div className={styles['wrapper']}>
      <UserInfo
        name={owner.name || 'Not found'}
        avt={owner.image ? owner.image : '/images/no-avatar.png'}
        blogId={params.blogId}
        currentUser={currentUser}
        comments={comments}
        commentsOwner={commentsOwner}
        isFavorite={isFavorite}
      />
      <Content
        title={currentBlog.title}
        content={currentBlog.content}
      />
    </div>
  );
}

export default BlogDetail;
