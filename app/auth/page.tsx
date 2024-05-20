import { LoginButton } from '@/components/ui/auth/login-button';
import { RegisterButton } from '@/components/ui/auth/register-button';
import { Button } from '@/components/ui/button';

export default function AuthHome() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md hover:text-green-500">Welcome to Linguify!</h1>
        <p className="text-white text-lg">Unlock the power of language with Linguify</p>
        <div className="flex items-center justify-center w-full space-x-7">
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
          <RegisterButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign up
            </Button>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
