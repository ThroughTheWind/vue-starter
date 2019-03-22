import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import _ from "lodash";
import config from "./config";
import i18n from "./i18n";
import VueLogger from "vuejs-logger";

//Custom css
require("./assets/flat-flags/css/main.css");

const isProduction = process.env.NODE_ENV === "production";

//define lodash globally, can now be used using this.$_
Object.defineProperty(Vue.prototype, "$_", { value: _ });
//define config globally, can now be used using this.$config
Object.defineProperty(Vue.prototype, "$config", { value: config });

//define logger options
const loggerOptions = {
  isEnabled: true,
  logLevel: isProduction ? "error" : "debug",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true
};

Vue.use(VueLogger, loggerOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
