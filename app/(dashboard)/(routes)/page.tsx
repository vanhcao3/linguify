import styles from '../../../styles/Dashboard/home.module.css';
import Menu from '@/components/Dashboard/Menu';

export default function Home() {
    return (
        <div className={styles['wrapper']}>
            <div>this is (maybe) a slider</div>
            <div className={styles['content']}>
                <div>Component chứa danh sách khóa học</div>
            </div>
        </div>
    );
}
