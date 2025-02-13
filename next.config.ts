import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL, // Available in browser
  },
  /* config options here */
};

export default nextConfig;
