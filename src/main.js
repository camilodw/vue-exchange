//importa la libreria
import Vue from "vue";
//importa el componente
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "@/router";
import { dollarFilter } from "@/filters";
//resgistro un nuevo filtro dentro de la app
Vue.filter("dollarFilter", dollarFilter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
