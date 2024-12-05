// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  serverMiddleware: [{ path: "/api/beacons", handler: "~/server/index.js" }],

  runtimeConfig: {
    public: {
      // Backend API base URL
      apiBase: "/api/beacons",
    },
  },

  // Ensure compatibility with Nuxt 3
  compatibilityDate: "2024-12-03",
});
