import Image from 'next/image';

import styles from '@/styles/BLog/CommentModal.module.css';
import CommentItem from './CommentItem';

const currentUser = {
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

interface IProps {
  closeModal: () => void;
}

function CommentModal(props: IProps) {
  const { closeModal } = props;
  return (
    <div className={styles['wrapper']} onClick={closeModal}>
      <div className={styles['content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['close-button']} onClick={closeModal}>
          <Image src="/icons/closeIcon.svg" alt="" width={24} height={24} />
        </div>
        <div className={styles['heading']}>
          <div className={styles['count-comments']}>Nhiều Bình Luận</div>
          <div className={styles['help']}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</div>
        </div>
        <div className={styles['write-comment']}>
          <div className="rounded-full overflow-hidden">
            <Image src={currentUser.avatar} alt="" width={40} height={40} />
          </div>
          <div className={styles['pseudoInput']}>Viết bình luận của bạn...</div>
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
