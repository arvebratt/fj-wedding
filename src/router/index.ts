import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProtectedView from "@/views/ProtectedView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/protected",
      name: "protected",
      component: ProtectedView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && localStorage.pass !== "123") {
    return { name: "protected" };
  }
});

export default router;
