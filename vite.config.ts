import react from "@vitejs/plugin-react";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compress from "vite-plugin-compress";
import { VitePWA } from "vite-plugin-pwa";

const env = process.env;

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    root: "./",
    build: { outDir: "./dist", sourcemap: true },
    plugins: [
        // https://jotai.org/docs/guides/vite
        react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
        VitePWA(),
        ...(env?.ENV === "prod" || env?.ENV === "viz" ? [compress()] : []),
        checker({ typescript: true, overlay: { initialIsOpen: false, position: "tl" } }),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            },
        ],
    },
});
