'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';

export const logout = async () => {
  await signOut({
    redirectTo: '/auth',
  })
};
