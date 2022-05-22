import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // TODO: remove this instruction vite
  vite: {
    plugins: [svgLoader({})],
  },
  typescript: {
    shim: false,
  },
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false }, // Disables prefixing for SVG IDs
      ],
    },
  },
});
