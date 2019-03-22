import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import _ from "lodash";
import config from "./config";
import i18n from "./i18n";

//define lodash globally, can now be used using this.$_
Object.defineProperty(Vue.prototype, "$_", { value: _ });
Object.defineProperty(Vue.prototype, "$config", { value: config });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
