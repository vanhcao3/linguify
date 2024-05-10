'use client';

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

import styles from '@/styles/Blog/CreateBlog.module.css';
import Editor from '@/components/Blog/Editor';

const pseudoOwnerId = '663b004185120856d291dc85';

function CreateBlog() {
  const router = useRouter();
  const contentRef = useRef<any>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const submitSuccess = () => toast.success('Xuất bản bài viết thành công!');

  const handeEditorChange = (value: string) => {
    setValue('contentValue', value);
  };

  const handleFormSubmit = (data: any) => {
    data.owner = pseudoOwnerId;
    console.log(data);

    // axios
    //   .post('http://localhost:8080/blogs', {
    //     title: data.titleValue,
    //     content: data.contentValue,
    //     owner: data.owner,
    //   })
    //   .then((res) => {
    //     console.log(res);

    //     if (res.status === 200) {
    //       submitSuccess();
    //       router.push('/');
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    register('titleValue', { required: true });
    register('contentValue', { required: true });
  }, [register]);

  const contentValue = watch('contentValue');

  return (
    <div className={styles['wrapper']}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles['form-wrapper']}>
        <div className={styles['section1']}>
          <div className={styles['title-wrapper']}>
            <div
              className={styles['title']}
              contentEditable
              data-placeholder="Tiêu đề"
              onInput={(e) => {
                setValue('titleValue', e.currentTarget.textContent?.trimStart() || '');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log(contentRef);

                  contentRef.current?.focus();
                }
              }}
            ></div>
            <p className={styles['error-message']}>{errors.titleValue && 'Enter valid title'}</p>
          </div>
          <button className={styles['submit-button']}>Xuất bản</button>
        </div>
        <Editor ref={contentRef} value={contentValue} onChange={handeEditorChange} height={500} />
      </form>
    </div>
  );
}

export default CreateBlog;
