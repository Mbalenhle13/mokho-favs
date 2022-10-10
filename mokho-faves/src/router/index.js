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
      path: "/collection",
      name: "collection",
      component: () => import("../views/CollectionView.vue"),
    },
    {
      path: "/contact-us",
      name: "contactUs",
      component: () => import("../views/ContactUsView.vue"),
    },
  ],
});

export default router;
