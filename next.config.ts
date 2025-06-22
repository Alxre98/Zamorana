import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';
import * as path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  productionBrowserSourceMaps: false,
  output: 'standalone',
  webpack: (config: Configuration) => {
    // Resolve path aliases
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };
    }
    
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
