/** @type {import('next').NextConfig} */ const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "assets.chhatreshkhatri.com", port: "", pathname: "/**" }] },
};
module.exports = nextConfig;
