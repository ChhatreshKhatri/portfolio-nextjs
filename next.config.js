/** @type {import('next').NextConfig} */ const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.chhatreshkhatri.com", port: "", pathname: "/**" }],
    unoptimized: true,
  },
};
module.exports = nextConfig;
