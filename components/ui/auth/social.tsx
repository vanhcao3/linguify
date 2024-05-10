'use client';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { providerLogin } from '@/actions/oauth-login';

export const Social = () => {

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => providerLogin('google')}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => providerLogin('github')}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
