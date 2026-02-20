import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // ConoHa WING用: 静的HTMLとして書き出す
  trailingSlash: true,   // サーバーとの互換性のためスラッシュを末尾に付ける
  images: {
    unoptimized: true,   // 静的書き出し時は画像最適化APIが使えないため
  },
};

export default nextConfig;
