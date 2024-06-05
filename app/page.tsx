'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui';

const Home = () => {
  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Welcome to Builds Hub</h1>
      <p>All GitHub Actions builds you need in one place</p>
      <Button variant="outline" onClick={handleSignIn}>
        <GitHubLogoIcon className="mr-2 size-4" /> Login with GitHub
      </Button>
    </main>
  );
};

export default Home;
