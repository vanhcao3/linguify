import Image from 'next/image';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';

import styles from '@/styles/blog/commentmodal.module.css';
import CommentItem from '../CommentItem';
import Editor from '../../Editor';
import Heading from './Heading';
import CloseButton from './CloseButton';
import { CommentSchema } from '@/schemas';
import { useRouter } from 'next/navigation';

interface props {
  closeModal: () => void;
  blogId: string;
  currentUser: any;
  comments?: any[];
  commentsOwner: any[];
}

function CommentModal({
  closeModal,
  blogId,
  currentUser,
  comments,
  commentsOwner,
}: props) {
  const route = useRouter();
  const userImage = currentUser.image
    ? currentUser.image
    : '/images/no-avatar.png';
  const [showEditor, setShowEditor] = useState(false);
  const form = useForm<z.infer<typeof CommentSchema>>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      owner: currentUser.id,
      blogId: blogId,
      content: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof CommentSchema>) => {
    try {
      console.log(data);

      const response = await axios.post(
        `/api/blog/${blogId}/addComment`,
        data,
      );
      console.log(response);
      toast.success('Bình luận thành công');
      setShowEditor(false);
      route.refresh();
    } catch (err) {
      console.log('[CommentModal]', err);
      toast.error('Bình luận thất bại');
    }
  };

  return (
    <div className={styles['wrapper']} onClick={closeModal}>
      <div
        className={styles['content']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={closeModal} />

        <Heading numComments={comments?.length} />

        <div className={styles['write-comment']}>
          <div className={styles['user-image']}>
            <Image src={userImage} alt="" width={40} height={40} />
          </div>
          {!showEditor ? (
            <div
              className={styles['pseudoInput']}
              onClick={() => setShowEditor(true)}
            >
              Comment something...
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[90%]"
            >
              <Controller
                name="content"
                control={form.control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Editor
                    value={field.value}
                    onChange={field.onChange}
                    height={200}
                  />
                )}
              />
              <p className="text-sm text-red-500 mt-2">
                {form.formState.errors.content?.message}
              </p>
              <div className={styles['form-button']}>
                <button
                  type="button"
                  onClick={() => setShowEditor(false)}
                >
                  Huỷ
                </button>
                <button
                  type="submit"
                  className={styles['submit-button']}
                >
                  Bình luận
                </button>
              </div>
            </form>
          )}
        </div>

        <div className={styles['comments']}>
          {comments?.map((comment, index) => (
            <CommentItem
              key={index}
              content={comment.content}
              commentOwner={commentsOwner[index]}
              createdAt={comment.createdAt}
              updatedAt={comment.updatedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
