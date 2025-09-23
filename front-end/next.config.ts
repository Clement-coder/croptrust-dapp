import type { NextConfig } from "next";
import { config } from "process";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  }
  /* config options here */
};

export default nextConfig;
