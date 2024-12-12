import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
} as NextConfig;

// biome-ignore lint/style/noDefaultExport: Next.js
export default nextConfig;
