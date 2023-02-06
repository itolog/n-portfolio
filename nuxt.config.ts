// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  css: ["vuetify/styles", "@/assets/styles/index.scss"],
  build: {
    transpile: ["vuetify", "gsap"],
  },
  vite: {
    plugins: [
      eslintPlugin()
    ],
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", config => {
        return config?.plugins?.push(
          vuetify(),
        );
      });
    }
  ],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      "Itim": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400, 500, 600],
        ital: [100]
      },
    }
  }
});
