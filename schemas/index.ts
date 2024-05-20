import * as z from 'zod';
import { stripHtmlTags } from '@/lib/utils';
import { UserRole } from '@prisma/client';

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
    message: 'Title is required',
  }),
  content: z.string().refine((value) => stripHtmlTags(value).length > 0, {
    message: 'Message is required',
  }),
});

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(8,)),
  newPassword: z.optional(z.string().min(8,)),
  confirmNewPassword: z.optional(z.string().min(8,)),
}).refine((data) => {
  if(data.password && !data.newPassword){
    return false;
  }

  return true;
}, {
  message: "New password is required!",
  path: ["newPassword"]
}).refine((data) => {
  if(data.newPassword && !data.password){
    return false;
  }
  return true;
}, {
  message: "Password is required!",
  path: ["password"]
}).refine(
  (data) => {
    return data.newPassword === data.confirmNewPassword;
  },
  {
    message: 'New passwords must match!',
    path: ['confirmNewPassword'],
  },
);