import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),          // ajuste se você tiver pasta src
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  base: "/", // URLs absolutas para assets, evita erro de MIME type
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
