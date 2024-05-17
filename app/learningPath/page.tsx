import Link from 'next/link';
import styles from '../../styles/LearningPath/LearningPath.module.css';
import Image from 'next/image';

function LearningPath() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['heading']}>
                <div className={styles['heading-title']}>Lộ trình học</div>
                <div className={styles['heading-content']}>
                    Bạn nên đánh giá chính xác trình độ tiếng Anh của mình để lên lộ trình học tiếng Anh phù hợp.
                    <Link href="/" className={styles['check-level']}>
                        <Image src="/icons/pointRightIcon.svg" alt="pointing" width={30} height={30} />
                        Đánh giá ngay!!!
                        <Image src="/icons/pointLeftIcon.svg" alt="pointing" width={30} height={30} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LearningPath;
