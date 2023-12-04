/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dawid-next-ecommerce.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
