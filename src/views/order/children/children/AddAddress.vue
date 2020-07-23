<template>
  <div id="addAddress">
    <!-- 头部导航 -->
    <van-nav-bar
      title="添加地址"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :border="true"
    />
    <!-- 添加地址 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      style="margin-top:3rem"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "./../../../../config/area";
import PubSub from "pubsub-js";
export default {
  name: "AddAddress",
  data() {
    return { areaList, searchResult: [] };
  },
  computed: {},
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.back();
    },
    // 点击保存
    async onSave(content) {
      // Toast("save");
      // let result = await
    },
    // 点击删除
    onDelete() {
      Toast("delete");
    },
  },
};
</script>

<style scoped>
#addAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>
