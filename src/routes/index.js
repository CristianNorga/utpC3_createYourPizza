import Vue from "vue";
import VueRouter from "vue-router";
import CreatePizza from "../views/pages/CreatePizza.vue";
Vue.use(VueRouter);

const routes = [{ path: "/", component: CreatePizza }];

const router = new VueRouter({
  routes,
});

export default router;
