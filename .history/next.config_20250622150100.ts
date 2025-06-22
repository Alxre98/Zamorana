import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  // Ensure that source maps are generated in production
  productionBrowserSourceMaps: false,
  // Enable static exports for the standalone output
  output: 'standalone',
  // Add any necessary webpack configuration
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Handle audio files
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(mp3|wav|ogg|m4a)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      });
    }

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
