'use client';
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

import styles from '@/styles/Blog/CreateBlog.module.css';

function CreateBlog() {
  const [contentValue, setContentValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const contentRef = useRef<any>(null);
  const { handleSubmit } = useForm();

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
  return (
    <div className={styles['wrapper']}>
      <form
        onSubmit={handleSubmit(() => {
          console.log('title value: ', titleValue);
          console.log('content value: ', contentValue);

          // axios
          //   .post('http://localhost:8080/blogs', {
          //     title: titleValue,
          //     content: contentValue,
          //   })
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        })}
        className={styles['form-wrapper']}
      >
        <div className={styles['section1']}>
          <div
            className={styles['title']}
            contentEditable
            data-placeholder="Tiêu đề"
            onInput={(e) => setTitleValue(e.currentTarget.textContent || '')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                contentRef.current?.focus();
              }
            }}
          ></div>
          <button>Xuất bản</button>
        </div>
        <div>
          <ReactQuill
            ref={contentRef}
            theme="snow"
            modules={modules}
            formats={formats}
            value={contentValue}
            onChange={setContentValue}
            placeholder="Nội dung viết ở đây"
            className={styles['editor']}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
