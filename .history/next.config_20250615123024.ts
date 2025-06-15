import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure that source maps are generated in production
  productionBrowserSourceMaps: false,
  // Enable static exports for the standalone output
  output: 'standalone',
  // Add any necessary webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
