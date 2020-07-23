<template>
  <div id="editAddress">
    <van-nav-bar
      title="编辑地址"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :border="true"
    />
    <!-- 编辑地址 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="addressInfo"
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
    return { areaList, addressInfo: [] };
  },
  computed: {},
  mounted() {},
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.back();
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
#editAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>
