import { createApp } from "vue";
import App from "./App.vue";
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style.js";
import "./common.css";
Varlet.StyleProvider(Varlet.Themes.dark);
createApp(App).use(Varlet).mount("#app");
