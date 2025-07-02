import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      name: "VueTwUi", // Your lib global var name for UMD build
      fileName: (format) => `vue-tw-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"], // don't bundle vue, treat as peer dep
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
