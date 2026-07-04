/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // safe for simple hosting platforms
  },
};

module.exports = nextConfig;
