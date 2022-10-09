/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'source.unsplash.com', 'media-exp1.licdn.com', 'bit.ly'],
  },
};

module.exports = nextConfig;
