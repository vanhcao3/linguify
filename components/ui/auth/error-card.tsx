import { Header } from '@/components/ui/auth/header';
import { BackButton } from '@/components/ui/auth/back-button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Something went wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/sign-in" />
      </CardFooter>
    </Card>
  );
};
