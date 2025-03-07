/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  devIndicators: {
    buildActivity: false, // ✅ Removes the loading indicator in dev mode
  },
  images: {
    domains: ["images.pexels.com", "encrypted-tbn2.gstatic.com"],
  },
};

export default nextConfig;
