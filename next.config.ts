import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
} as NextConfig;

export default nextConfig;
