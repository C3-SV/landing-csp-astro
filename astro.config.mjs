import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://copa.c3.com.sv",
  adapter: vercel(),
  integrations: [
    react({ experimentalReactChildren: true }),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== "/phases/";
      },
    }),
  ],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  publicDir: "./public",
  srcDir: "./src",
});
