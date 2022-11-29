<template>
  <div class="home">
    <div class="home-header">
      <div class="home-search" @click="toSearch">
        <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"/>
      </div>
      <div class="home-swipe">
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img v-lazy="item">
        </van-swipe-item>
      </van-swipe>
      </div>
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
import { Search, Grid, GridItem, Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default Vue.extend({
  name: 'home',
  data() {
    return {
      value: '',
      images: [
        require('@/assets/banners/sktBanner.svg'),
        require('@/assets/banners/xyyxBanner.svg'),
      ]
    }
  },
  methods: {
    toSearch() {
      this.$router.push({name:'search'});
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  font-size: 14px;
  color: #333;
  &-header {
    width: 100%;
  }
  &-swipe {
    text-align: center;
  }
  &-content {
    padding: 16px;
    &-header {
      background-color: #eee;
    }
    &-body {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .list {
        width: 45%;
        border: 1px solid #000;
        height: 200px;
        margin: 0 8px 16px 0;
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