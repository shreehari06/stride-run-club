import { PATH_PREFIX } from "@/path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: PATH_PREFIX,
  assetPrefix: PATH_PREFIX,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
