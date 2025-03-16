import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/stride-run-club" : "",
  assetPrefix: isProd ? "/stride-run-club" : "",
  output: "export",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
