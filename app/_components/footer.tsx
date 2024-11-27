import Link from 'next/link';

export const Footer = () => (
  <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row sm:justify-between md:px-6">
    <p className="text-xs text-muted-foreground">
      &copy; {new Date().getFullYear()} Builds Hub. All rights reserved.
    </p>
    <nav className="flex gap-4 sm:gap-6">
      <Link
        className="text-xs underline-offset-4 hover:underline"
        href="#"
        prefetch={false}
      >
        Terms of Service
      </Link>
      <Link
        className="text-xs underline-offset-4 hover:underline"
        href="#"
        prefetch={false}
      >
        Privacy
      </Link>
    </nav>
  </footer>
);
