import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import TanStackStart from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/router-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackStart(),
    react({
      babel: {
        plugins: [["@babel/plugin-syntax-typescript", {}]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
