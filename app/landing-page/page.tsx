import { auth, signOut } from '@/auth';
import { currentUserId } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/ui/auth/logout-button';

const LandingPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center">
      This will be a public landing page that will be available to
      user who has not signed in
    </div>
  );
};

export default LandingPage;
