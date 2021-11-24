//importa la libreria
import Vue from "vue";
//importa el componente
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");