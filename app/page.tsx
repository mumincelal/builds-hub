'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button } from '@/components/ui';
import { Spinner } from '@/icons';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn('github', { callbackUrl: '/dashboard' });
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen">
      <div className="grid">
        <div className="grid p-6">
          <Button
            className="place-self-end"
            variant="outline"
            disabled={isLoading}
            onClick={handleSignIn}
          >
            {isLoading ? (
              <Spinner className="mr-2 size-4" />
            ) : (
              <GitHubLogoIcon className="mr-2 size-4" />
            )}
            Login with GitHub
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
