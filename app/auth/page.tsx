import { LoginButton } from '@/components/ui/auth/login-button';
import { Button } from '@/components/ui/button';

export default function AuthHome() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-green-700 to-lime-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Welcome to Linguify!</h1>
        <p className="text-white text-lg">Unlock the power of language with Linguify</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
