import { Controller } from 'react-hook-form';

import styles from '@/styles/blog/createblog.module.css';

interface props {
  name: string;
  control: any;
  errorMessage?: string;
}

function TitleInput({ name, control, errorMessage }: props) {
  const className = `${styles['title']} ${!!errorMessage ? styles['error-title'] : ''}`;

  return (
    <div className={styles['title-wrapper']}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <textarea value={field.value} onChange={field.onChange} placeholder="Title" className={className} />
        )}
      />
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default TitleInput;
