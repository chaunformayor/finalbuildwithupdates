/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so you can upload the built files to almost any host (cPanel, S3, etc.)
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
