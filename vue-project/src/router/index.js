import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/movie",
      name: "movie",
      component: () => import("../views/MovieView.vue"),
    },
    {
      /**
       * Link@ https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching-with-params
       * #Dynamic Route Matching with Params
       */
      path: "/movie/:id",
      name: "MovieDetails",
      component:() => import('../views/MovieDetails.vue'),
    },
    {
      /**
     * Link@ https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
     * #Catch all / 404 Not found Route
     */
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
