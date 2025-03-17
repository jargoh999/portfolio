import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Optional: Configure the export
  trailingSlash: true,
  // Disable server-side features for static export
  reactStrictMode: true,
};

export default nextConfig;
