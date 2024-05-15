import { LoginButton } from '@/components/ui/auth/login-button';
<<<<<<< HEAD
=======
import { RegisterButton } from '@/components/ui/auth/register-button';
>>>>>>> b782b003483d1af986dcac5a2d7b4ba8164f7462
import { Button } from '@/components/ui/button';

export default function AuthHome() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-green-700 to-lime-500">
      <div className="space-y-6 text-center">
<<<<<<< HEAD
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Welcome to Linguify!</h1>
        <p className="text-white text-lg">Unlock the power of language with Linguify</p>
        <div>
=======
        <h1 className="text-6xl font-semibold text-white drop-shadow-md hover:text-green-500">Welcome to Linguify!</h1>
        <p className="text-white text-lg">Unlock the power of language with Linguify</p>
        <div className="flex items-center justify-center w-full space-x-7">
>>>>>>> b782b003483d1af986dcac5a2d7b4ba8164f7462
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
<<<<<<< HEAD
=======
          <RegisterButton>
            <Button variant="secondary" size="lg">
              Sign up
            </Button>
          </RegisterButton>
>>>>>>> b782b003483d1af986dcac5a2d7b4ba8164f7462
        </div>
      </div>
    </main>
  );
}
