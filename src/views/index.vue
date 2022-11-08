<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active" placeholder fixed >
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
      active: 'home'
    }
  }
})
</script>
<style scoped>

</style>