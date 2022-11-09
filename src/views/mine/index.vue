<template>
  <div class="mine">
    <div class="mine-header">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="mine-list">
      <div class="menu">
        <van-grid column-num="5">
          <van-grid-item>
            待付款
          </van-grid-item>
          <van-grid-item>
            待发货
          </van-grid-item>
          <van-grid-item>
            待收货
          </van-grid-item>
          <van-grid-item>
            评价
          </van-grid-item>
          <van-grid-item>
            退款/售后
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="mine-body">
      <mm-cell title="标题" is-link />
      <mm-cell title="标题" is-link />
      <mm-cell title="标题" is-link />
    </div>
    <van-button @click="logoutUser" block size="large" class="bg-blue" round>退出登录</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button, Grid, GridItem } from 'vant';
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
export default Vue.extend({
  name: 'mine',
  methods: {
    logoutUser() {
      sessionStorage.clear();
      this.$router.replace({path: '/login'});
      location.reload();
    }
  }
})
</script>

<style lang="less" scoped>

</style>