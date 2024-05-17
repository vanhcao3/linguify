import Image from 'next/image';
import styles from '@/styles/Dashboard/menu.module.css';
import Link from 'next/link';

interface IProps {
    category: any;
}

function Menu(props: IProps) {
    const { category } = props;
    return (
        <div className={styles['wrapper']}>
            <h1 className={styles['heading']}>{category.title}</h1>
            <div className={styles['items']}>
                {category.data.map((item: any, index: number) => {
                    return (
                        <div key={index} className={styles['item-wrapper']}>
                            {item.image && (
                                <div className={styles['item-image']}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={240}
                                        height={135}
                                        // layout="responsive"
                                        // objectFit="cover"
                                    />
                                    <Link href="/learningPath">
                                        <div className={styles['overlay']}>
                                            <button>Xem khoá học</button>
                                        </div>
                                    </Link>
                                </div>
                            )}
                            {item.title && (
                                <Link href="/learningPath" className={styles['item-title']}>
                                    {item.title}
                                </Link>
                            )}
                            {item.enrollers && (
                                <div className={styles['enrollers']}>
                                    <Image src="/icons/usersGroupIcon.svg" alt="" width={20} height={20} />
                                    {item.enrollers}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;
