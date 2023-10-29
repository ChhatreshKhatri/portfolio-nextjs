/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.chhatreshkhatri.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
