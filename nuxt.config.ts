// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  router: {
    extendedRoutes(routes, resolve) {
      routes.splice(0);
      routes.push({
        name: "Home",
        path: "/",
        component: resolve(__dirname, "pages/index.vue"),
      });
    },
  },

  compatibilityDate: "2024-12-03",
};