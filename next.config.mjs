/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ifowwhoiz6eixak7.public.blob.vercel-storage.com",
      },
      {
        protocol: "http",
        hostname: "t1.kakaocdn.net",
      },
    ],
  },
};

export default nextConfig;
