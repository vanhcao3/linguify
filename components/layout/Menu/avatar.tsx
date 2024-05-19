import Image from 'next/image';
import styles from '@/styles/layout/menu.module.css';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/use-current-user';

interface IProps {
    items: Array<any>;
}

function Avatar(props: IProps) {
    const { items } = props;

    const currentUser = useCurrentUser();

    return (
        <div className={styles['user-menu-list']}>
            <div className={styles['inner-user-menu']}>
                <div className={styles['userInfo-wrapper']}>
                    <div className={styles['userInfo-avt']}>
                        <Image
                            src={currentUser?.image ? currentUser.image : '/images/no-avatar.png'}
                            width={60}
                            height={80}
                            alt={currentUser?.name ? currentUser.name : 'Anonymous'}
                        />
                    </div>
                    <div className={styles['userInfo-content']}>
                        <div className={styles['userInfo-name']}>{currentUser?.name}</div>
                        <div className={styles['userInfo-nickname']}>{currentUser?.name}</div>
                    </div>
                </div>
                <hr className={styles.hrTag} />
                {items.map((item, index) => (
                    <div key={index} className={styles['item-wrapper']}>
                        {item.href ? (
                            <Link href={item.href} className={styles['item-title']}>
                                {item.title}
                            </Link>
                        ) : item.onClick ? (
                            <div className={styles['item-title']}><button onClick={item.onClick}>{item.title}</button></div>
                        ) : (
                            <div className={styles['item-title']}>{item.title}</div>
                        )}
                        {item.hrTag && <hr className={styles['hrTag']} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Avatar;
