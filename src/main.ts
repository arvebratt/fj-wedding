import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBars, faXmark);

import "./assets/main.css";

const options: PluginOptions = {
  position: POSITION.BOTTOM_LEFT,
  draggable: false,
};

createApp(App)
  .use(router)
  .use(Toast, options)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
