<template>
  <div id="DashBoard">
    <van-tabbar
      v-model="active"
      active-color="#75a342"
      inactive-color="#000"
      route
    >
      <van-tabbar-item replace to="/dashboard/home">
        <span>主页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active_home : icon.inactive_home" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <span>分类</span>
        <template #icon="props">
          <img
            :src="props.active ? icon.active_category : icon.inactive_category"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/dashboard/cart"
        :badge="goodsNum > 0 ? goodsNum : 0"
      >
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? icon.active_cart : icon.inactive_cart" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.active_mine : icon.inactive_mine" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view
    ></keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "DashBoard",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabBarActiveIndex")) || 0,
      icon: {
        active_home: require("@/images/tabbar/home_selected.png"),
        inactive_home: require("@/images/tabbar/home_default.png"),
        active_category: require("@/images/tabbar/category_selected.png"),
        inactive_category: require("@/images/tabbar/category_default.png"),
        active_cart: require("@/images/tabbar/shoppingcart_selected.png"),
        inactive_cart: require("@/images/tabbar/shoppingcart_default.png"),
        active_mine: require("@/images/tabbar/mine_selected.png"),
        inactive_mine: require("@/images/tabbar/mine_default.png"),
      },
    };
  },
  computed: {
    ...mapState(["shopCart"]),
    goodsNum() {
      if (this.shopCart) {
        let num = 0;
        Object.values(this.shopCart).forEach((goods, index) => {
          num += goods.num;
        });
        return num;
      } else {
        return 0;
      }
    },
  },
  watch: {
    active(value) {
      // console.log(value);
      let tabBarActiveIndex = value > 0 ? value : 0;
      // 缓存到本地
      sessionStorage.setItem("tabBarActiveIndex", value);
    },
  },
  mounted() {
    // 2. 获取购物车的数据
    this.INIT_SHOP_CART();
  },
  methods: {
    ...mapMutations(["INIT_SHOP_CART"]),
  },
};
</script>

<style lang="less" scopes>
#DashBoard {
  width: 100%;
  height: 100%;
  background-color: green;
}
</style>
