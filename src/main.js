import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
const vuetify = new Vuetify();
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
    },
  },
}).$mount("#app");

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
