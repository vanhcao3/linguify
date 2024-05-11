import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { forwardRef } from 'react';

import styles from '@/styles/Blog/CreateBlog.module.css';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

function Editor(props: IProps, ref: React.ForwardedRef<any>) {
  const { value, onChange, height } = props;

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  const heightStyle = `h-[${height}px]`;

  return (
    <div className={heightStyle}>
      <ReactQuill
        ref={ref}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder="Nội dung viết ở đây"
        className={styles['editor']}
      />
    </div>
  );
}

export default forwardRef(Editor);
