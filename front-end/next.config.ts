import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    if (isServer) {
      config.externals.push("@react-native-async-storage/async-storage");
    }
    return config;
  }
  /* config options here */
};

export default nextConfig;