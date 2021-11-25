import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/views/HomeComponent";
import AboutComponent from "@/views/AboutComponent";
//indica a vue usar el router
Vue.use(Router);
export default new Router({
    //use history mode html
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent
        }
    ],
});