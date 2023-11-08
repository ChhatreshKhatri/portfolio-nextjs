/** @type {import('next').NextConfig} */ const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "assets.chhatreshkhatri.com", port: "", pathname: "/**" }],
    unoptimized: true,
  },
};
module.exports = nextConfig;
