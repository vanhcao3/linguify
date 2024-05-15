import styles from '@/styles/Dashboard/menu.module.css';
import MenuItem from '@/components/Dashboard/MenuItem';

interface props {
  categoryName: string;
  courses: any;
}

function Menu({ categoryName, courses }: props) {
  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['heading']}>{categoryName}</h1>
      <div className={styles['items']}>
        {courses.map((course: any, index: number) => {
          if (course.imageUrl === null) {
            course.imageUrl = '/images/no-image.png';
          }
          return (
            <MenuItem
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              price={course.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
