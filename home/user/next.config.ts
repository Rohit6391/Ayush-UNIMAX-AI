import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverActions: {
    bodySizeLimit: '25mb',
    // Increase timeout for long-running actions like video generation
    serverActionsTimeout: 120000,
  },
  env: {
    // A public, rate-limited API key for demonstration purposes.
    // Users should be encouraged to use their own key for unlimited access.
    NEXT_PUBLIC_GEMINI_API_KEY_FALLBACK: 'AIzaSyAfoObMQyAIyEj44MD6FJi1G6-4kcPjLgg',
  }
};

export default nextConfig;
