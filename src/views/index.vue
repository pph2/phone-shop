<template>
  <div>
    <router-view/>
    <van-tabbar placeholder fixed route >
      <van-tabbar-item name="home" icon="home-o" replace to='/home'>首页</van-tabbar-item>
      <van-tabbar-item name="about" icon="search" replace to='/about'>分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o" replace to='/cart'>购物车</van-tabbar-item>
      <van-tabbar-item name="mine" icon="contact" replace to='/mine'>我的</van-tabbar-item>
    </van-tabbar> 
  </div> 
</template> 
 
<script lang="ts">
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default Vue.extend({
  name: 'index',
  data() {
    return {
      active: 0,
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.name === 'login') {
      sessionStorage.clear();
    }
    if(from.name === 'login') {
      console.log(sessionStorage.getItem('userId'));      
    }
    else {
      const goodsInfo = JSON.stringify({});
      sessionStorage.setItem('goodsInfo', goodsInfo);
    }
    next();
  }
})
</script>
<style lang="less" scoped>
.div {
  padding: 0;
  margin: 0;
  .van-tabbar {
    font-size: 12px;
  }
}
</style>