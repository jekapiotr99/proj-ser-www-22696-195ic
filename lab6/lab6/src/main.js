import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'

import './assets/main.css'

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");


