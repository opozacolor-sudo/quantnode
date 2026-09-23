import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/favicon.svg" }];
  },
  async redirects() {
    return [
      { source: "/docs", destination: "/", permanent: true },
      { source: "/cum-functioneaza", destination: "/comment-ca-marche", permanent: true },
      { source: "/istoric", destination: "/historique", permanent: true },
      { source: "/terms", destination: "/conditions-generales", permanent: true },
      { source: "/privacy", destination: "/confidentialite", permanent: true },
      { source: "/termeni", destination: "/conditions-generales", permanent: true },
      { source: "/confidentialitate", destination: "/confidentialite", permanent: true },
    ];
  },
};

export default nextConfig;
