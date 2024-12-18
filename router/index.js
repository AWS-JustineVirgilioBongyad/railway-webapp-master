import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Index,
    },
  ],
});
