import { Providers } from "@/app/providers";
import { cn } from "@/lib/tailwind";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// biome-ignore lint/nursery/useComponentExportOnlyModules: Next.js
export const metadata: Metadata = {
  title: {
    template: "%s | Builds Hub",
    default: "Builds Hub"
  },
  description: "Manage GitHub Actions Across All Repos"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={cn("h-screen", inter.className)}>
      <div className="flex h-full">
        <div className="flex-1">
          <Providers>{children}</Providers>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

// biome-ignore lint/style/noDefaultExport: Next.js
export default RootLayout;
