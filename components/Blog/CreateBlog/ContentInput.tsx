import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';

// import Editor from '../Editor';
import styles from '@/styles/Blog/CreateBlog.module.css';

const BlogEditor = dynamic(() => import('../Editor'), {
  ssr: false,
});

interface props {
  name: string;
  control: any;
  errorMessage?: string;
}

function ContentInput({ name, control, errorMessage }: props) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <BlogEditor
            value={field.value}
            onChange={field.onChange}
            height={400}
            className={!!errorMessage ? styles['error-editor'] : ''}
          />
        )}
      />
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default ContentInput;
