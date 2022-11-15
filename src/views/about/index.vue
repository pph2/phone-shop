<template>
  <div class="about">
    <div class="about-search" @click="toSearch">
      <van-search shape="round" v-model="searchValue" placeholder="请输入搜索关键词"/>
    </div>
    <div class="about-body">
      <div class="about-body-left">
        <van-sidebar v-model="value">
          <van-sidebar-item title="测试" />
          <van-sidebar-item title="测试" />
          <van-sidebar-item title="测试" />
          <van-sidebar-item title="测试" />
        </van-sidebar>
      </div>
      <div class="about-body-right">
        <div class="card">

        </div>
        <div class="card">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Sidebar, SidebarItem,Search } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
export default Vue.extend({
  name: 'about',  
  data() {
    return {
      searchValue: '',
      value: 0,
    }
  },
  methods: {
    toSearch() {
      this.$router.push('/search');
    }
  },
  created() {

  }
})
</script>

<style lang="less" scoped>
.about {
  &-body {
    display: flex;
    justify-content: space-between;
    &-right {
      width: 75%;
      display: flex;
      justify-content: space-between;
      margin-right: 10px;
      .card {
        width: 48%;
      }
    }
  }
}
</style>