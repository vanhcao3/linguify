/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'utfs.io' },
      { hostname: 'lh3.googleusercontent.com' },
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
        hostname: 'p16-sign-sg.tiktokcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
      },
    ],
  },
};

export default nextConfig;
