// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // YENİ EKLENEN BÖLÜM
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/business/:id',
        destination: 'https://api.service.menuland.net/business/:id',
      },
      {
        source: '/.well-known/apple-app-site-association',
        destination: 'https://api.service.menuland.net/.well-known/apple-app-site-association',
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: 'https://api.service.menuland.net/.well-known/assetlinks.json',
      },
    ];
  },
};

export default nextConfig;