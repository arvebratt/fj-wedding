import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RsvpView from "@/views/RsvpView.vue";
import SubmissionSuccess from "@/components/submission/SubmissionSuccess.vue";
import SubmissionFail from "@/components/submission/SubmissionFail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: RsvpView,
    },
    {
      path: "/thanks",
      name: "success",
      component: SubmissionSuccess,
    },
    {
      path: "/404",
      name: "fail",
      component: SubmissionFail,
    },
  ],
});

export default router;
