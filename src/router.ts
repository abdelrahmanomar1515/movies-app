import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/shows" },
  {
    path: "/shows",
    component: () => import("./modules/shows/pages/ShowsPage.vue"),
  },
  {
    path: "/shows/:id",
    component: () => import("./modules/shows/pages/ShowDetailsPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
