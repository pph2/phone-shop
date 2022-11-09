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
            <p><van-icon name="peer-pay" /></p>
            待付款
          </van-grid-item>
          <van-grid-item>
            <p><van-icon name="logistics" /></p>
            待发货
          </van-grid-item>
          <van-grid-item>
            <p><van-icon name="completed" /></p>
            待收货
          </van-grid-item>
          <van-grid-item>
            <p><van-icon name="other-pay" /></p>
            评价
          </van-grid-item>
          <van-grid-item>
            <p><van-icon name="after-sale" /></p>
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
import { Button, Grid, GridItem, Icon } from 'vant';
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
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