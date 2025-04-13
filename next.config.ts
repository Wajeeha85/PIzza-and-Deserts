import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.pizzahut.io", "www.havmor.com", "cdn.grofers.com"], // Add the new domain here
  },
};

export default nextConfig;
