/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async redirects() {
        return [];t
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'blog.beyondhut.com',
          },
          {
            protocol: 'https',
            hostname: 'webwork.store',
          },
        ],
      },
};

export default nextConfig;
