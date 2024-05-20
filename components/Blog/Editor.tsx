import dynamic from 'next/dynamic';

import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

import styles from '@/styles/blog/createblog.module.css';
import ReactQuill, { ReactQuillProps } from 'react-quill';

interface props {
  value: string;
  onChange: (value: string) => void;
  height?: number;
  className?: string;
}

function Editor(
  { value, onChange, height, className }: props,
) {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
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

  return (
    <div className="h-max">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder="Write here"
        className={`${styles['editor']} ${className}`}
        style={{ minHeight: `${height}px` }}
      />
    </div>
  );
}

export default Editor;
