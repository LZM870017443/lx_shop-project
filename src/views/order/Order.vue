<template>
  <div id="Order">
    <!-- 头部导航 -->
    <van-nav-bar
      title="填写订单"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :border="true"
    />
    <!-- 选择收获地址 -->
    <van-contact-card
      :type="address_type"
      add-text="选择收货地址"
      :name="this.address_name"
      :tel="this.address_phone"
      style="margin-top: 3rem"
      @click="chooseAddress"
    />
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "vant";
import PubSub from "pubsub-js";
export default {
  name: "Order",
  data() {
    return {
      // 1. 地址
      address_type: "add", // 地址卡片类型
      address_name: null, // 收货人
      address_phone: null, // 收货人电话
      address_id: null, // 收货人地址ID
    };
  },
  mounted() {
    PubSub.subscribe("userAddress", (msg, address) => {
      console.log(address);
      // 修改卡片的类型
      this.address_type = "edit";
      this.address_name = address.name;
      this.address_phone = address.tel;
      this.address_id = address.address_id;
    });
  },
  computed: {},
  watch: {},
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.back();
    },
    // 选择地址
    chooseAddress() {
      this.$router.push({ path: "/confirmOrder/myAddress" });
    },
  },
};
</script>

<style scoped>
#Order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}

.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
