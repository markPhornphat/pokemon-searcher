import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://img.pokemondb.net/artwork/***")],
  },
};

export default nextConfig;
