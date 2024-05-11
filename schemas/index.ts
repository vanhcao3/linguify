import * as z from 'zod';

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
