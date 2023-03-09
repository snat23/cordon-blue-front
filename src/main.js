import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store/store.js";
import VueAlertify from "vue-alertify";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from './router/routes'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "leaflet/dist/leaflet.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueAlertify);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
