'use client';

import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { CardWrapper } from '@/components/ui/auth/card-wrapper';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { newVerification } from '@/actions/new-verification';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token!');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/sign-in"
    >
      <div className="flex item-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
