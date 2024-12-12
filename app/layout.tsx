import { Providers } from "@/app/providers";
import { cn } from "@/lib/tailwind";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading"
});
const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

// biome-ignore lint/nursery/useComponentExportOnlyModules: Next.js
export const metadata: Metadata = {
  title: "Builds Hub",
  description: "All GitHub Actions builds you need in one place"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={cn("antialiased", fontHeading.variable, fontBody.variable)}
    >
      <Providers>{children}</Providers>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

// biome-ignore lint/style/noDefaultExport: Next.js
export default RootLayout;
