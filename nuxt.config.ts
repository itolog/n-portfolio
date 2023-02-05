// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  css: ["vuetify/styles", "@/assets/styles/index.scss"],
  build: {
    transpile: ["vuetify"],
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
    async (options, nuxt) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", config => {
        return config?.plugins?.push(
          vuetify()
        );
      });
    }
  ]
});
