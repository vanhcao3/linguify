import Image from 'next/image';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
// import { ObjectId } from 'mongodb';
// import toast from 'react-hot-toast';

import styles from '@/styles/BLog/CommentModal.module.css';
import CommentItem from '../CommentItem';
import Editor from '../../Editor';
import Heading from './Heading';
import CloseButton from './CloseButton';
import { CommentSchema } from '@/schemas';

const currentUser = {
  _id: '663b004185120856d291dc85',
  name: 'Hoàng Thế Anh',
  nickname: '@theanhhoang',
  avatar: 'https://avatars.githubusercontent.com/u/139200791?s=400&u=15cb9dcb2b47f557ff086155571e3f645f734f0b&v=4',
};

const pseudoComments = [
  {
    name: 'TikTok China',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg',
    content: '<p>hay quá ạ!!!</p>',
  },
  {
    name: 'Zoe',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
    content: '<p>Hello, my name is Zoe!!</p>',
  },
  {
    name: 'Amumu',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    content: '<p>Hey, come back ):</p>',
  },
  {
    name: 'Ahri',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    content: '<p>hmmm</p>',
  },
  {
    name: 'EVELYNN',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
    content: '<p>so biggg!!!</p>',
  },
  {
    name: 'Captain Teemo',
    avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_47.jpg',
    content: '<p>:D</p>',
  },
];

interface props {
  closeModal: () => void;
  blogId: string;
}

function CommentModal({ closeModal, blogId }: props) {
  const [showEditor, setShowEditor] = useState(false);
  const form = useForm<z.infer<typeof CommentSchema>>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      // owner: new ObjectId(currentUser._id),
      // blogId: new ObjectId(blogId),
      owner: currentUser._id,
      blogId: blogId,
      content: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof CommentSchema>) => {
    try {
      console.log(data);

      const response = await axios.post('/api/blog/addComment', data);
      console.log(response);
      console.log('Bình luận thành công');
      // toast.success('Bình luận thành công');
    } catch (err) {
      console.log('[CommentModal]', err);

      console.log('Bình luận thất bại');
      // toast.error('Bình luận thất bại');
    }
  };

  return (
    <div className={styles['wrapper']} onClick={closeModal}>
      <div className={styles['content']} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal} />

        <Heading numComments={pseudoComments.length} />

        <div className={styles['write-comment']}>
          <div className="rounded-full overflow-hidden h-max w-max shrink-0">
            <Image src={currentUser.avatar} alt="" width={40} height={40} />
          </div>
          {!showEditor ? (
            <div className={styles['pseudoInput']} onClick={() => setShowEditor(true)}>
              Viết bình luận của bạn...
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%]">
              <Controller
                name="content"
                control={form.control}
                rules={{ required: true }}
                render={({ field }) => <Editor value={field.value} onChange={field.onChange} height={200} />}
              />
              <p className="text-sm text-red-500 mt-2">{form.formState.errors.content?.message}</p>
              <div className={styles['form-button']}>
                <button type="button" onClick={() => setShowEditor(false)}>
                  Huỷ
                </button>
                <button type="submit" className={styles['submit-button']}>
                  Bình luận
                </button>
              </div>
            </form>
          )}
        </div>

        <div className={styles['comments']}>
          {pseudoComments.map((comment, index) => (
            <CommentItem key={index} data={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
