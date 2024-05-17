import styles from '@/styles/Blog/DetailBlog.module.css';
import Content from '@/components/Blog/DetailBlog/Content';
import UserInfo from '@/components/Blog/DetailBlog/UserInfo';
import { getBlogById } from '@/data/blog';
import { getUserById } from '@/data/user';
import { getComments } from '@/actions/comment';
import { currentUserId } from '@/lib/auth';

async function BlogDetail({
  params,
}: {
  params: { blogId: string };
}) {
  const userId = await currentUserId();
  const currentUser = await getUserById(userId);
  const currentBlog = await getBlogById(params.blogId);
  const comments = await getComments(params.blogId);
  const commentsOwner = await Promise.all(
    comments.map((comment) => getUserById(comment.owner)),
  );

  if (currentBlog === null) {
    return <div>CurrentBlog not found</div>;
  }
  const owner = await getUserById(currentBlog.owner);

  if (owner === null) {
    return <div>User not found</div>;
  }

  return (
    <div className={styles['wrapper']}>
      <UserInfo
        name={owner.name || 'Not found'}
        avt={owner.image || '/images/no-image.png'}
        blogId={params.blogId}
        currentUser={currentUser}
        comments={comments}
        commentsOwner={commentsOwner}
      />
      <Content
        title={currentBlog.title}
        content={currentBlog.content}
      />
    </div>
  );
}

export default BlogDetail;
