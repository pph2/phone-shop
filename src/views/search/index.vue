<template>
  <div class="search">
    <van-search
      v-model="value"
      shape="round"
    />
    <div class="search-histroy">
      <div class="list">123</div>
      <div class="list">123</div>
      <div class="list">123</div>
      <div class="list">123</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search } from 'vant';
Vue.use(Search);
export default Vue.extend({
  name: 'search',
  data() {
    return {
      value: ''
    }
  }
})
</script>

<style lang="less" scoped>
.search {
  color: #333;
  padding: 16px;
  &-histroy {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .list {
      font-size: 12px;
      color: #666;
      background-color: #eee;
    }
  }
}
</style>