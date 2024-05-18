import { NewVerificationForm } from '@/components/ui/auth/new-verification-form';
import { Suspense } from 'react';

const NewVerificationPage = () => {
  return (
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
