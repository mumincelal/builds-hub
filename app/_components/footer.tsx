import { LucideBoxes } from "lucide-react";
import Link from "next/link";

export const Footer = () => (
  <footer className="bg-gray-900 py-10">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between text-white md:flex-row">
        <div className="flex items-center gap-2">
          <LucideBoxes className="size-8 text-white" />
          <span className="font-medium text-lg">Builds Hub</span>
        </div>
        <span className="text-center text-white text-xs">
          Copyright © {new Date().getFullYear()} Builds Hub.
          <span className="block md:ml-1 md:inline-block">
            All rights reserved by&nbsp;
            <Link
              href="https://linkedin.com/in/mumin-celal-pinar"
              className="text-white underline decoration-red-500 decoration-wavy underline-offset-4"
            >
              Mümin Celal Pinar
            </Link>
          </span>
        </span>
      </div>
    </div>
  </footer>
);
