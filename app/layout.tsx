import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/app/providers';
import { cn } from '@/utils/tailwind';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Builds Hub',
  description: 'All GitHub Actions builds you need in one place'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={cn('min-h-screen', inter.className)}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
