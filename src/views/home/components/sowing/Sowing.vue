<template>
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
    <van-swipe-item
      v-for="(sowing, index) in sowing_list"
      :key="index"
      style="height: 200px;"
      @click="onClick(index)"
    >
      <img :src="sowing.icon_url" :alt="sowing.public_name" id="swipe-imge" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    sowing_list: Array,
  },
  computed: {},
  watch: {},
  methods: {
    onClick(index) {
      // console.log(index);
      Toast("当前 Swipe 索引：" + index);
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #39a9ed;
}
#swipe-imge {
  height: 100%;
  width: 100%;
}
</style>
