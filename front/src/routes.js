import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/Home.vue";
import SplashScreen from "./components/pages/SplashScreen.vue";
import SplashScreen2 from "./components/pages/SplashScreen2.vue";
import UnderConstruction from "./components/pages/Under_Construction.vue";
import Accounts from "./components/pages/Accounts.vue";
import ViewAccount from "./components/pages/ViewAccount.vue";
import view_bill_page from "./components/pages/view_billstatement.vue";
import Enrollment from "./components/pages/Enrollment.vue";
import Support from "./components/pages/Support.vue";

import { NavbarPlugin } from "bootstrap-vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/underConstruction",
      component: UnderConstruction,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/",
      component: SplashScreen2,
      meta: {
        forVisitors: true
      }
    },

    {
      path: "/home",
      component: Home,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/splashScreen",
      component: SplashScreen,
      alias: "/",
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/splashScreen2",
      component: SplashScreen2,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/myAccounts",
      component: Accounts,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/enroll",
      component: Enrollment,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/support",
      component: Support,
      meta: {
        forVisitors: true
      }
    },
    {
      name: "view_account",
      path: "/view_account",
      component: ViewAccount,
      props: true,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/view_bill_page",
      name: "view_bill_page",
      component: view_bill_page,
      props: true,
      meta: {
        forVisitors: true
      }
    }
  ],
  mode: "history"
});

export default router;
