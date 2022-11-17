<template>
  <div class="search">
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索内容"
      @search="onSearch"
    >
      <template #left>
        <p @click="goback"><van-icon name="arrow-left" />返回</p>
      </template>
    </van-search>
    <div class="search-histroy">
      <div class="search-histroy-header">
        <p>历史记录</p>
        <p class="clear"><van-icon size="16" @click="clearHistroy" name="delete-o" />清除历史记录</p>
      </div>
      <div class="search-histroy-card">
        <div class="list">123</div>
        <div class="list">123</div>
        <div class="list">123</div>
        <div class="list">123</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search, Icon } from 'vant';
Vue.use(Search);
Vue.use(Icon)
export default Vue.extend({
  name: 'search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    clearHistroy() {
      console.log('清空');
      
    },
    onSearch() {
      const productId = '32142';
      this.$router.push({
        name: 'products',
        params: { productId }
      });
    }
  },
})
</script>

<style lang="less" scoped>
.van-search {
  padding: 10px 0;
  p {
    margin-right: 8px;
  }
}
.search {
  color: #333;
  padding: 16px;
  &-histroy {
    &-header {
      font-size: 16px;
      color: #999;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      p {
        line-height: 12px;
      }
      .van-icon {
        position: relative;
        top: 1px;
      }
      .clear {
        font-size: 12px;
      }
    }
    &-card {
      display: flex;
      flex-wrap: wrap;
      .list {
        padding: 4px 12px;
        margin-right: 12px;
        font-size: 14px;
        color: #666;
        background-color: #eee;
        border-radius: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>