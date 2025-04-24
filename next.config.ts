import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora los errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
export default nextConfig;
