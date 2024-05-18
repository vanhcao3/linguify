'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import styles from '@/styles/Blog/CreateBlog.module.css';
import TitleInput from '@/components/Blog/CreateBlog/TitleInput';
import ContentInput from '@/components/Blog/CreateBlog/ContentInput';
import { NewBlogSchema } from '@/schemas';

const CreateBlog = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof NewBlogSchema>>({
    resolver: zodResolver(NewBlogSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof NewBlogSchema>) => {
    try {
      const response = await axios.post(
        '/api/blog/createNewBlog',
        data,
      );
      console.log(response);
      toast.success('Xuất bản bài viết thành công!');
      router.push('/blog?page=1');
    } catch (error) {
      console.log('[CreateBlog]', error);
      toast.error('Xuất bản bài viết thất bại');
    }
  };

  return (
    <div className={styles['wrapper']}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles['form-wrapper']}
      >
        <div className={styles['section1']}>
          <TitleInput
            name="title"
            control={form.control}
            errorMessage={form.formState.errors.title?.message}
          />
          <button className={styles['submit-button']}>
            Xuất bản
          </button>
        </div>
        <ContentInput
          name="content"
          control={form.control}
          errorMessage={form.formState.errors.content?.message}
        />
      </form>
    </div>
  );
};

export default CreateBlog;
