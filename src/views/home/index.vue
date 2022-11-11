<template>
  <div class="home">
    <div class="home-header">
      <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"/>
      <van-grid :column-num="3">
        <van-grid-item>
          <div>热门</div>
        </van-grid-item>
        <van-grid-item>
          <div>实惠</div>
        </van-grid-item>
        <van-grid-item>
          <div>最新</div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="home-content">
      <div class="home-content-header"></div>
      <div class="home-content-body">
        <div class="list">
          <div class="pic"></div>
          <div class="content">
            <div class="desc"></div>
            <div class="price"></div>
          </div>
        </div>
        <div class="list">
          <div class="pic"></div>
          <div class="content">
            <div class="desc"></div>
            <div class="price"></div>
          </div>
        </div>
        <div class="list">
          <div class="pic"></div>
          <div class="content">
            <div class="desc"></div>
            <div class="price"></div>
          </div>
        </div>
        <div class="list">
          <div class="pic"></div>
          <div class="content">
            <div class="desc"></div>
            <div class="price"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search, Grid, GridItem, Swipe, SwipeItem } from 'vant'
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
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
  font-size: 14px;
  color: #333;
  &-header {
    width: 100%;
  }
  &-content {
    padding: 16px;
    &-header {
      background-color: #eee;
    }
    &-body {
      display: flex;
      justify-content: space-around;
      .list {
        width: 48%;
        margin-right: 8px;
        .content {
          font-size: 12px;
        }
        .desc {
          color: #666;
        }
        .price{
          color: #999;
        }
      }
    }
  }
}
</style>