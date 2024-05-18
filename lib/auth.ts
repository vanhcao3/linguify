import { auth } from '@/auth';

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

export const currentUserId = async () => {
  const session = await auth();

  // return session?.user?.id;
  return 'clw00yifr00037rn9w0ybiu0u';
};
