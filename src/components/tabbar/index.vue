<template>
  <div>
    <van-tabbar placeholder route fixed >
      <van-tabbar-item icon="home-o" replace to='/home'>标签</van-tabbar-item>
      <van-tabbar-item icon="search" replace to='/about'>标签</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to='/cart'>标签</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to='/mine'>标签</van-tabbar-item>
    </van-tabbar> 
  </div> 
</template> 
 
<script lang="ts">
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default Vue.extend({
  data() {
    return {
    }
  }
})
</script>
<style scoped>
</style>