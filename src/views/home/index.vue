<template>
  <div class="home">
    <div class="home-header">
      <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"/>
      <van-grid :column-num="3">
        <van-grid-item>
          <div>123</div>
        </van-grid-item>
        <van-grid-item>
          <div>123</div>
        </van-grid-item>
        <van-grid-item>
          <div>123</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search, Grid, GridItem } from 'vant'
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
export default Vue.extend({
  name: 'home',
  data() {
    return {
      value: '',
    }
  },
})
</script>

<style lang="less" scoped>
.home {
  &-header {
    width: 100%;
  }
}
</style>