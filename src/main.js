import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import _ from "lodash";

//define lodash globally, can now be used using this.$_
Object.defineProperty(Vue.prototype, "$_", { value: _ });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
