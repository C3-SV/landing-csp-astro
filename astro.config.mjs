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
        return ![
          "/phases/",
          "/inscripcion/registro/",
          "/inscripcion/exito/",
        ].includes(pathname);
      },
    }),
  ],
  output: "server",
  vite: {
    optimizeDeps: {
      include: ["uploadthing/client"],
    },
    plugins: [tailwindcss()],
  },
  publicDir: "./public",
  srcDir: "./src",
});
