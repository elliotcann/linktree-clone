import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/links" : "",
  images: {
    domains: ["example.com", "example.org"],
  },
};

export default nextConfig;
