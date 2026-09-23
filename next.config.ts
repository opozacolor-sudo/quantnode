import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/docs", destination: "/", permanent: true },
      { source: "/cum-functioneaza", destination: "/comment-ca-marche", permanent: true },
      { source: "/istoric", destination: "/historique", permanent: true },
    ];
  },
};

export default nextConfig;
