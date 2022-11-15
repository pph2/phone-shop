<template>
  <div class="cart">
    <div class="cart-search">
      <van-search shape="round" v-model="cartValue" placeholder="请输入搜索关键词"/>
    </div>
    <div class="cart-header">
      <div class="left">购物车</div>
      <div class="right">管理商品</div>
    </div>
    <div class="cart-body">
      <div class="cart-body-card">
        <div class="title">您加入购物车的商品</div>
        <van-card
          price="2.00"
          desc="测试"
          title="测试商品"
          thumb="@/assets/logo.png"
        >
          <template #num>
            <van-stepper v-model="value" theme="round" button-size="22" disable-input />
          </template>
        </van-card>
      </div>
    </div>
    <div class="cart-foot">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Card, Button, Stepper, SubmitBar, Search } from 'vant';
Vue.use(Card);
Vue.use(Button);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Search);
export default Vue.extend({
  name: 'cart',
  data() {
    return {
      products: {
        name: '',
        price: '',
        num: 0,
      },
      value: 1,
      // 购物车搜索
      cartValue: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('提交成功');
      
    }
  }
})
</script>

<style lang="less" scoped>
/deep/.van-submit-bar {
  position: fixed;
  bottom: 51px;
}
.cart {
  &-header, &-body {
    margin: 16px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    // margin: 16px 0;
    .left {
      font-size: 18px;
    }
  }
}
</style>