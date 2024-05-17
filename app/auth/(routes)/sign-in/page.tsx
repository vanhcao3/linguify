import { LoginForm } from '@/components/ui/auth/login-form';
import { Suspense } from 'react';

export default function SignInPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
