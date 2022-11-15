<template>
  <div class="mine">
    <div class="mine-header">
      <div class="mine-header-top">
        <div class="left"></div>
        <div class="right"><van-icon name="setting-o" size="28" /></div>
      </div>
      <div class="mine-header-body">
        <div class="pic"></div>
        <div class="desc"></div>
      </div>
    </div>
    <div class="mine-list">
      <div class="menu">
        <van-grid column-num="5">
          <van-grid-item>
            <p><van-icon size="24" name="peer-pay" /></p>
            待付款
          </van-grid-item>
          <van-grid-item>
            <p><van-icon size="24" name="logistics" /></p>
            待发货
          </van-grid-item>
          <van-grid-item>
            <p><van-icon size="24" name="completed" /></p>
            待收货
          </van-grid-item>
          <van-grid-item>
            <p><van-icon size="24" name="other-pay" /></p>
            评价
          </van-grid-item>
          <van-grid-item>
            <p><van-icon size="24" name="after-sale" /></p>
            退款
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="mine-body">
      <can-cell-group>
        <van-cell icon="card" title="我的钱包" value="0.00" />
        <van-cell icon="map-marked" title="我的地址" />
        <van-cell icon="star" title="我的收藏"></van-cell>
      </can-cell-group>
    </div>
      <van-button type="info" @click="logoutUser" block size="large" class="mine-foot" round>退出登录</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button, Grid, GridItem, Icon, Cell, CellGroup } from 'vant';
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
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
.mine {
  position: relative;
  height: 100vh;
  &-header {
    &-top {
      display: flex;
      justify-content: space-between;
      padding: 16px;
    }
    &-body {
      .pic, .desc{
        margin: 0 auto;
      }
      .pic {
        width: 96px;
        height: 96px;
        border: 1px solid #333;
        border-radius: 50%;
        overflow: hidden;
      }
      .desc {
        text-align: center;
      }
    }
  }
  &-body {
    .van-cell {
      font-size: 16px;
    }
  }
  &-foot {
      position: absolute;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 66px;
    }
}
</style>