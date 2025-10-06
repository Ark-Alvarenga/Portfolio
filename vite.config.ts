import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // sua pasta src deve existir na raiz
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // root removido, agora o Vite usa a raiz do projeto
  base: './', // caminhos relativos
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // saída final
    emptyOutDir: true,
  },
});

