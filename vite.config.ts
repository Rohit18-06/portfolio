/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwind(),
    TanStackRouterVite(),
    react(),
  ],
  ssr: {
    external: ["three"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
