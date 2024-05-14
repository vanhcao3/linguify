import * as z from 'zod';
import { stripHtmlTags } from '@/lib/utils';

export const NewPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: 'Password must have a minimum of 8 characters',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must have a minimum of 8 characters',
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  );

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required!',
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: 'Password must have a minimum of 8 characters',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must have a minimum of 8 characters',
    }),
    name: z.string().min(1, {
      message: 'Name is required',
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  );

export const CommentSchema = z.object({
  owner: z.string(),
  blogId: z.string(),
  content: z.string().refine((value) => stripHtmlTags(value).length > 0, {
    message: 'Comment is required',
  }),
});

export const NewBlogSchema = z.object({
  title: z.string().min(1, {
    message: 'Tiêu đề không được để trống',
  }),
  content: z.string().refine((value) => stripHtmlTags(value).length > 0, {
    message: 'Nội dung không được để trống',
  }),
});
