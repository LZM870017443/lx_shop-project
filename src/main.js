import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
//FastClick
import FastClick from "fastclick";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}
//引入全局样式
import "./style/common.less";

//引入UI组件库
import "./plugins/vant";

// 引入全局过滤器
import "@/config/filters";

// 4. 引入rem
import "@/config/rem.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
