import styles from '@/styles/Dashboard/home.module.css';
import Menu from '@/components/Dashboard/Menu';
import { getCategories } from '@/actions/getCategories';
import { getCourses } from '@/actions/getCourses';

export default async function Home() {
  const categories = await getCategories();
  const courses = await Promise.all(
    categories.map((category: any) => getCourses(category.id)),
  );

  return (
    <div className={styles['wrapper']}>
      <div>this is (maybe) a slider</div>
      <div className={styles['content']}>
        {categories.map((category, index) => {
          if (courses[index].length === 0) return null;

          return (
            <Menu
              key={index}
              categoryName={category.name}
              courses={courses[index]}
            />
          );
        })}
      </div>
    </div>
  );
}
