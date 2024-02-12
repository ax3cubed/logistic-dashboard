import { defineConfig } from "vite";
import postcss from "./postcss.config.cjs";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  plugins: [svgr(), react(), mkcert()],
  server: {
    https: true,
    port: "5173",
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  preview: {
    https: true,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
