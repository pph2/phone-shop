<template>
  <div class="search">
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索内容"
      @search="onSearch"
      background="#4fc08d"
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
        <div v-for="(item, index) in searchList" :key="index" class="list">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search, Icon, Dialog } from 'vant';
Vue.use(Search);
Vue.use(Icon);
Vue.use(Dialog);
export default Vue.extend({
  name: 'search',
  data() {
    return {
      value: '',
      show: false,
      searchList: [
        {
          name: '123',
        },
        {
          name: '123',
        },
        {
          name: '123',
        },
        {
          name: '123',
        },
      ],
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    /**
     * 清空历史记录按钮
     */
    clearHistroy() {
      console.log('清空');
      Dialog.alert({
        message: '确定清除历史记录吗？',
        showCancelButton: true,
        cancelButtonText: '取消',
      }).then(() => {
        this.searchList = [];
      }).catch(() => {
        console.log(this.searchList);
      })   
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
  padding: 0 16px 0 8px;
  color: #fff;
  p {
    margin-right: 14px;
  }
}
.search {
  color: #333;
  &-histroy {
    padding: 16px;
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