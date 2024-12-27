import type { NextConfig } from "next";

type Environment = 'local' | 'github' | 'custom-domain';

// Get environment from an env variable - default to local
const DEPLOY_ENV = (process.env.DEPLOY_ENV || 'local') as Environment;

const getBasePath = (env: Environment) => {
  switch (env) {
    case 'local':
      return '';
    case 'github': // Not using a custom domain
      return '/WebSite';
    case 'custom-domain':
      return '';
    default:
      return '';
  }
};

const getAssetPath = (env: Environment) => {
  switch (env) {
    case 'local':
      return '';
    case 'github':
      return '/WebSite';
    case 'custom-domain':
      return '';
    default:
      return '';
  }
};

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: getBasePath(DEPLOY_ENV),
  assetPrefix: getAssetPath(DEPLOY_ENV),
}


export default nextConfig;
