<template>
  <div class="cart">
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
</template>

<script lang="ts">
import Vue from 'vue'
import { Card, Button, Stepper } from 'vant';
Vue.use(Card);
Vue.use(Button);
Vue.use(Stepper);
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
  }
})
</script>

<style lang="less" scoped>

</style>