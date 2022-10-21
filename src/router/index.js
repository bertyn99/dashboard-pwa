import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory,
  routes: [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/login", component: () => import("../views/Login.vue") },
    { path: "/register", component: () => import("../views/Registration.vue") },
    { path: "/admin", component: () => import("../views/Home.vue") },
  ],
});

export default router;
