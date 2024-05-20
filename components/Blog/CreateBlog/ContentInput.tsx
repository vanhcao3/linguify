import { Controller } from 'react-hook-form';
// import { Editor } from '@/components/editor';
import Editor from '../Editor';
import styles from '@/styles/Blog/CreateBlog.module.css';

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
          <Editor
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
