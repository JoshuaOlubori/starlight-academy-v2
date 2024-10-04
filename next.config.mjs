/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://starlight-academy-96po.onrender.com',
        'localhost:3000', // localhost
        'https://reimagined-yodel-46rp7jvrj4pcjx4x-3000.app.github.dev/',
        'reimagined-yodel-46rp7jvrj4pcjx4x.github.dev',
        'https://3000-joshuaolubo-starlightac-2qn1o1g60sm.ws-eu116.gitpod.io', // Codespaces URL
        // Add other URLs if needed
      ],
    },
  },
};

export default nextConfig;
