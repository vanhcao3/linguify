import { currentUserId } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/ui/auth/logout-button';

const SignOutPage = async () => {
  const userId = await currentUserId();
  console.log(userId);
  return (
    <div className="flex flex-col items-center justify-center">
      <LogoutButton>
        <Button type="submit">Sign out</Button>
      </LogoutButton>
    </div>
  );
};

export default SignOutPage;
