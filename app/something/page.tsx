import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

const SignOutPage = async () => {
  return (
    <div>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default SignOutPage;
