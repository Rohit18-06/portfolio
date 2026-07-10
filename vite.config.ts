import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      enableRouteGeneration: false,
      autoCodeSplitting: false,
      plugin: {
        hmr: {
          style: "webpack",
        },
      },
    }),
    tanstackStart(),
    tailwind(),
    viteReact({
      jsxImportSource: undefined,
    }),
    nitro(),
  ],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
  server: {
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  ssr: {
    external: ["three"],
  },
});
