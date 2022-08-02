import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { PluginOptions, POSITION } from "vue-toastification";

import "./assets/main.css";

const options: PluginOptions = {
  position: POSITION.BOTTOM_LEFT,
  draggable: false,
};

createApp(App).use(router).use(Toast, options).mount("#app");
