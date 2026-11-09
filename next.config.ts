import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    // app/layout.tsx が無い（(ja) と en でルートレイアウトが別）構成で 404 を表示するため
    globalNotFound: true,
  },
};

export default nextConfig;
