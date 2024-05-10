import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/ui/auth/logout-button';

const LandingPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center">
      <div>{JSON.stringify(session)}</div>
      <LogoutButton>
        <Button type="submit">Sign out</Button>
      </LogoutButton>
    </div>
  );
};

export default LandingPage;
