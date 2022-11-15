<template>
  <div class="cart">
    <div class="cart-body">
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
    <div class="cart-foot">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Card, Button, Stepper, SubmitBar } from 'vant';
Vue.use(Card);
Vue.use(Button);
Vue.use(Stepper);
Vue.use(SubmitBar);
export default Vue.extend({
  name: 'cart',
  data() {
    return {
      products: {
        name: '',
        price: '',
        num: 0,
      },
      value: 1
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
</style>