import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.start.gg",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
