import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/home/Home.vue";
import About from "@/components/pages/about/About.vue";
import Random from "@/components/pages/random/Random.vue";
import RandomChild from "@/components/pages/random/RandomChild.vue";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/random",
      name: "random",
      components: {
        header: AppHeader,
        default: Random,
        footer: AppFooter
      },
      children: [
        { path: "", component: RandomChild }
        // ...other sub routes
      ],
    }
  ]
});
