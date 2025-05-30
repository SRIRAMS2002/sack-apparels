import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
    domains: ['media.graphassets.com'], // adjust based on your actual CDN
  },
};

export default nextConfig;
