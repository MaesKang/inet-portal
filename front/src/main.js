import Vue from "vue";
import App from "./App.vue";
import Router from "./routes.js";
import Global from "./packages/auth/Global.js";

import VueResource from "vue-resource";
import Auth from "./packages/auth/Auth.js";
import "./assets/main.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-search-select/dist/VueSearchSelect.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Multiselect } from "vue-multiselect";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import Keycloak from "keycloak-js";

Vue.use(VueResource);
Vue.use(Multiselect);
Vue.use(Auth);
Vue.use(Global);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("multiselect", Multiselect);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

console.log(window.location.host);
var protocol = window.location.protocol;
if (window.location.host == "sims.dctechmicro.com") {
    Vue.http.options.root = protocol + "//sims.dctechmicro.com/back/";
    console.log("server");
} else if (window.location.host == "localhost:8080") {
    Vue.http.options.root = "http://localhost:8000";
    console.log("localhost");
}

Vue.http.headers.common["Authorization"] = "Bearer " + Vue.auth.getToken(); //
//
// Router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.forVisitors)) {
//     if (Vue.auth.isAuthenticated()) {
//       next({
//         path: "/dashboard"
//       });
//     } else next();
//   } else if (to.matched.some(record => record.meta.forAuth)) {
//     if (!Vue.auth.isAuthenticated()) {
//       next({
//         path: "/login"
//       });
//     } else next();
//   } else next();
// });

// new Vue({
//   el: "#app",
//   render: h => h(App), //to show page on index
//   router: Router
// }).$mount("#app");

let initOptions = {
    url: "https://keycloak.apollotech.co/auth",
    realm: "zeep_dev_client",
    clientId: "test",
    publicClient: false,
    openIdSupport: "oid-none",
    scopes: ["openid"],
    onLoad: "login-required",
    checkLoginIframe: false
};
let keycloak = new Keycloak(initOptions);
Vue.prototype.$keycloak = keycloak;
keycloak
    .init({ onLoad: initOptions.onLoad })
    .then(auth => {
        if (!auth) {
            window.location.reload();
        } else {
            Vue.http.headers.common["Authorization"] = "Bearer " + keycloak.token;
            new Vue({
                el: "#app",
                render: h => h(App),
                router: Router
            });
        }
    })
    .catch(response => {
        console.log(response);
        if (
            window.confirm(
                "Can't connect to keycloak.\nClick 'OK' to test if you can access the keycloak page."
            )
        ) {
            window.location.href =
                "https://keycloak.apollotech.co/auth/realms/zeep_dev_client/protocol/openid-connect/auth?client_id=test&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&state=adf47151-a731-41b9-9b73-2c9ebad9889c&response_mode=fragment&response_type=code&scope=openid&nonce=5c1c3f2f-49d2-4008-9c4f-30dc044b1361";
        }
    });