import { currentUserId } from '@/lib/auth';
import styles from '../../../styles/Dashboard/home.module.css';
import Menu from '@/components/Dashboard/Menu';
import { redirect } from 'next/navigation';

export default async function Home() {
  const userId = await currentUserId();
  if (!userId) {
    return redirect('/auth');
  }

  return (
    <div className={styles['wrapper']}>
      <div>this is (maybe) a slider</div>
      <div className={styles['content']}>
        <div>Component chứa danh sách khóa học</div>
      </div>
    </div>
  );
}
