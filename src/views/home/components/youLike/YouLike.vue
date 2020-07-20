<template>
  <div class="wrapper">
    <div class="titleWrapper">
      <div class="middleLine"></div>
      <div class="title">猜你喜欢</div>
    </div>
    <div class="contentWrapper">
      <YouLikeItem
        v-for="(product, index) in you_like_product_list"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import YouLikeItem from "./YouLikeItem";
export default {
  name: "YouLike",
  data() {
    return {};
  },
  props: {
    you_like_product_list: Array || [],
  },
  components: { YouLikeItem },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 0.625rem;
  // margin-bottom: 1.5rem;
}

.titleWrapper {
  position: relative;
  padding: 0 0.625rem;
  height: 2.1875rem;
  text-align: center;
}

.middleLine {
  padding-top: 1.09375rem;
  border-bottom: solid 1px #d8d8d8;
}

.title {
  position: relative;
  display: inline-block;
  top: -1.09375rem;
  padding: 0 1.25rem;
  line-height: 2.1875rem;
  font-size: 1rem;
  background: #f5f5f5;
}
.contentWrapper {
  margin-bottom: 3.5rem;
}
</style>
