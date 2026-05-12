import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react({ experimentalReactChildren: true })],
  vite: {
    plugins: [tailwindcss()],
  },
  publicDir: "../public",
  srcDir: "./src",
});