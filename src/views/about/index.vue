<template>
  <div class="about">
    <van-sidebar v-model="value">
      <van-sidebar-item title="测试" />
      <van-sidebar-item title="测试" />
      <van-sidebar-item title="测试" />
      <van-sidebar-item title="测试" />
    </van-sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default Vue.extend({
  name: 'about',  
  data() {
    return {
      value: 0,
    }
  },
  created() {

  }
})
</script>

<style lang="less" scoped>

</style>