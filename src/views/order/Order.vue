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
    <!-- 送达时间 -->
    <van-cell-group style="margin-top: 0.5rem">
      <van-cell title="送达时间" value="请选择送达时间" is-link />
      <van-cell center value="共5件" is-link>
        <template>
          <img src="./images/detail1.jpg" style="width: 3rem;" />
          <img src="./images/detail1.jpg" style="width: 3rem;" />
          <img src="./images/detail1.jpg" style="width: 3rem;" />
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 支付方式 -->
    <van-cell-group style="margin-top: 0.5rem">
      <van-cell title="支付方式" value="微信" />
    </van-cell-group>
    <!-- 备注 -->
    <van-cell-group style="margin-top: 0.5rem">
      <van-cell title="备注">
        <input
          type="text"
          style="text-align: right"
          placeholder="选填，备注您的特殊需求！"
        />
      </van-cell>
    </van-cell-group>

    <!-- 商品全额,配送费 -->
    <van-cell-group style="margin-top: 0.5rem">
      <van-cell title="商品全额" value="1.11" />
      <van-cell title="单元格" value="0.00" />
    </van-cell-group>

    <!-- 提交订单 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    <!-- 路由出口 -->
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
    // 提交订单
    onSubmit() {},
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
