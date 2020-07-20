import {
  ADD_GOODS,
  INIT_SHOP_CART,
  REDUCE_CART,
  SELECTED_SINGER_GOODS,
  SELECTED_All_GOODS,
  CLEAR_CART,
} from "./mutations-type";

import { getStore, removeStore, setStore } from "./../config/global";
import Vue from "vue";

export default {
  // 1. 往购物车中添加数据
  [ADD_GOODS](state, { goodsId, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;
    // 1.1 判断商品是否存在
    if (shopCart[goodsId]) {
      // 存在
      shopCart[goodsId]["num"]++;
    } else {
      // 不存在
      shopCart[goodsId] = {
        num: 1,
        id: goodsId,
        name: goodsName,
        small_image: smallImage,
        price: goodsPrice,
        checked: true,
      };
    }
    // 1.2  产生新对象
    state.shopCart = { ...shopCart };
    // 1.3 存入本地
    setStore("shopCart", state.shopCart);
  },

  // 2. 页面初始化，获取购物车的数据(本地)
  [INIT_SHOP_CART](state) {
    let initCart = getStore("shopCart");
    if (initCart) {
      // JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
      state.shopCart = JSON.parse(initCart);
    }
  },

  // 3. 把商品移出购物车
  [REDUCE_CART](state, { goodsId }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if (goods) {
      // 找到该商品
      if (goods["num"] > 0) {
        goods["num"]--;
        // 3.1 判断是否只有0个
        if (goods["num"] === 0) {
          delete shopCart[goodsId];
        }
      } else {
        goods = null;
      }
      // 3.2 同时数据
      state.shopCart = { ...shopCart };
      setStore("shopCart", state.shopCart);
    }
  },

  // 4. 单个商品选中和取消选中
  [SELECTED_SINGER_GOODS](state, { goodsId }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if (goods) {
      if (goods.checked) {
        // 存在该属性
        goods.checked = !goods.checked;
      } else {
        Vue.set(goods, "checked", true);
        // goods.checked = !goods.checked;
        // goods.checked = true;
      }
      // 4.1 同时数据
      state.shopCart = { ...shopCart };
      setStore("shopCart", state.shopCart);
    }
  },

  // 5. 所有商品选中和取消选中
  [SELECTED_All_GOODS](state, { isSelected }) {
    let shopCart = state.shopCart;
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        // 存在该属性
        goods.checked = !isSelected;
      } else {
        Vue.set(goods, "checked", !isSelected);
      }
    });
    state.shopCart = { ...shopCart };
  },

  // 6. 清空购物车
  [CLEAR_CART](state) {
    //清空数值
    state.shopCart = null;
    //重新赋值，防止深拷贝
    state.shopCart = { ...state.shopCart };
    //凡事要保留的数据都要同步
    setStore("shopCart", state.shopCart);
  },
};
