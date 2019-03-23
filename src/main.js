import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import _ from "lodash";
import config from "./config";
import VueLogger from "vuejs-logger";
import Vue2Storage from "vue2-storage";
import i18n from "./i18n";

//Custom css
require("./assets/flat-flags/css/main.css");

const isProduction = process.env.NODE_ENV === "production";
Vue.config.productionTip = false;

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
Vue.use(Vue2Storage, {
  prefix: process.env.VUE_APP_STORAGE_PREFIX,
  driver: "local",
  ttl: 60 * 60 * 24 * 1000
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
