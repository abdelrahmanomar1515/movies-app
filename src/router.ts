import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/movies" },
  {
    path: "/movies",
    component: () => import("./modules/movies/pages/MoviesPage.vue"),
  },
  {
    path: "/movies/:id",
    component: () => import("./modules/movies/pages/MovieDetailsPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
