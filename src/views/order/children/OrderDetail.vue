<template>
  <div id="orderDetail">订单详情</div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";
export default {
  name: "OrderDetail",
  computed: {},
};
</script>

<style scoped>
#orderDetail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
}
</style>
