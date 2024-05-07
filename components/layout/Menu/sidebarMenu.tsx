import Image from 'next/image';
import styles from '@/styles/layout/menu.module.css';
import Link from 'next/link';

interface IProps {
    items: Array<any>;
}

function SidebarMenu(props: IProps) {
    const { items } = props;

    return (
        <div className={styles['sidebar-menu-wrapper']}>
            {items.map((item, index) => {
                return (
                    <Link key={index} href={item.href} className={styles['sidebar-menu-item']}>
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
}

export default SidebarMenu;
