import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shorturl.at',
      },
      {
        protocol: 'https',
        hostname: 'life.exabyting.com',
      },
    ],
  },
};

export default nextConfig;
