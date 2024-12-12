import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zenchor-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zenchor-website/' : '',
}


export default nextConfig;
