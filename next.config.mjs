/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/brand/**",
      },
      {
        protocol: 'https',
        hostname: 'otrai.s3.us-east-2.amazonaws.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        pathname: '/wp-content/uploads/**',
      }
    ],
  },
};

export default nextConfig;
