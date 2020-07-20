import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "./../views/dashboard/DashBoard.vue";
const Home = () => import("./../views/home/Home.vue");
const Category = () => import("./../views/category/Category.vue");
const Cart = () => import("./../views/cart/Cart.vue");
const Mine = () => import("./../views/mine/Mine.vue");
const Order = () => import("./../views/order/Order.vue");
const Login = () => import("./../views/login/Login.vue");
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/dashboard" },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
    children: [
      { path: "/dashboard", redirect: "/dashboard/home" },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { keepAlive: true },
      },
      {
        path: "category",
        name: "category",
        component: Category,
        meta: { keepAlive: true },
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
      },
      {
        path: "mine",
        name: "mine",
        component: Mine,
      },
    ],
  },

  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
