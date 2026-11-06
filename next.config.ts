import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/freelancer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/freelancer' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
