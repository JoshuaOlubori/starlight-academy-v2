/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "dummyimage.com" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://friendly-pancake-xx4gw5pxj6v2v77g.github.dev",
        "https://starlight-academy-96po.onrender.com",
        "localhost:3000", // localhost
        "https://reimagined-yodel-46rp7jvrj4pcjx4x-3000.app.github.dev/",
        "reimagined-yodel-46rp7jvrj4pcjx4x.github.dev",
        "https://3000-joshuaolubo-starlightac-2qn1o1g60sm.ws-eu116.gitpod.io", // Codespaces URL
        // Add other URLs if needed
      ],
    },
  },
};

export default nextConfig;
