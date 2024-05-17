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
  code: z.optional(z.string()),
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

export const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
});

export const descriptionFormSchema = z.object({
  description: z.string().min(1, {
    message: 'Description is required',
  }),
});

export const imageFormSchema = z.object({
  imageUrl: z.string().min(1, {
    message: 'Image is required',
  }),
});

export const categoryFormSchema = z.object({
  categoryId: z.string().min(1, {
    message: 'Category is required',
  }),
});

export const priceFormSchema = z.object({
  price: z.coerce.number(),
});

export const attachmentFormSchema = z.object({
  url: z.string().min(1),
});

export const chapterAccessFormSchema = z.object({
  isFree: z.boolean().default(false),
});

export const chapterVideoFormSchema = z.object({
  videoUrl: z.string().min(1),
});

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