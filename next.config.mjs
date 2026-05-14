/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    domains: ["images.pexels.com"],
    unoptimized: true,
  },
};

export default nextConfig;