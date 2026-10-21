import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Este proyecto vive dentro de OneDrive y hay un package-lock.json en un
  // directorio superior; fijamos la raíz para que Turbopack no infiera mal el workspace.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
