<template>
  <div class="products">
    <div class="products-header">
      <van-nav-bar
        title="测试商品"
        left-arrow
        @click-left="goBack"
      >
      <template #right>
        <van-icon name="search" size="18" />
      </template>  
      </van-nav-bar>
    </div>
    <div class="products-body">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in 5" :key="index">{{item}}</van-swipe-item>
      </van-swipe>
    </div>
    <div class="products-foot">
      <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, NavBar, Icon, Swipe, SidebarItem } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SidebarItem);
export default Vue.extend({
  name: 'products',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
})
</script>

<style lang="less" scoped>
.products {
  &-body {
    padding: 16px;
  }
}
</style>