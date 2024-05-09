/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'files.fullstack.edu.vn',
      },
      {
        protocol: 'https',
        hostname: 'engbreaking.com',
      },
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
      },
    ],
  },
};

export default nextConfig;
