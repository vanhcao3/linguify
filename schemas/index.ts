import * as z from 'zod';

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

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must have a minimum of 8 characters',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});
