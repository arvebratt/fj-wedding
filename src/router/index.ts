import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MusicView from "@/views/MusicView.vue";
import ProtectedView from "@/views/ProtectedView.vue";

const router = createRouter({
  history: createWebHistory(),
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
    {
      path: "/music",
      name: "music",
      component: MusicView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && localStorage.pass !== "bröllop") {
    return { name: "protected" };
  }
});

export default router;
