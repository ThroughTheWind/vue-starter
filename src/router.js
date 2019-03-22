import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/home/Home.vue";
import About from "@/components/pages/about/About.vue";
import Example from "@/components/pages/example/Example.vue";
import ExampleChild from "@/components/pages/example/ExampleChild.vue";
import HelloI18n from "@/components/HelloI18n.vue";
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
      path: "/example",
      name: "example",
      components: {
        header: AppHeader,
        default: Example,
        footer: AppFooter
      },
      children: [
        { path: "", component: ExampleChild }
        // ...other sub routes
      ]
    },
    {
      path: "/i18n",
      name: "i18n",
      components: {
        header: AppHeader,
        default: HelloI18n,
        footer: AppFooter
      }
    }
  ]
});
