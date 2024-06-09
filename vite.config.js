// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/om.html"),
        bands: resolve(__dirname, "src/bands.html"),
        detaljer: resolve(__dirname, "src/detaljer.html"),
        partnerskab: resolve(__dirname, "src/partnerskab.html"),

      },
    },
  },
});
