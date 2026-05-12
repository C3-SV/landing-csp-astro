import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: vercel(),
  integrations: [react({ experimentalReactChildren: true })],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  publicDir: "../public",
  srcDir: "./src",
});