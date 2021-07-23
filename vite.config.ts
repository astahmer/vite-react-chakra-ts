import { defineConfig } from "vite";
import reactJsx from "vite-react-jsx";

import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  root: "./",
  plugins: [reactRefresh(), reactJsx(), VitePWA()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
});
