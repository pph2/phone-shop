<template>
  <div class="products">
    <van-nav-bar
      title="商品" 
      left-arrow 
      left-text="返回"
    >
      <template #right>
        <van-icon @click="collectPhone" :name="toggleCollect ? 'star' : 'star-o'" size="18" />
      </template>
    </van-nav-bar>  
    <!-- <div class="products-header">
      <van-nav-bar
        title="测试商品"
        left-arrow
        @click-left="goBack"
      >
      <template #right>
        <van-icon name="search" size="18" />
      </template>  
      </van-nav-bar>
    </div> -->
    <div class="products-body">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in 5" :key="index"></van-swipe-item>
      </van-swipe>
      <van-cell-group>
        <van-cell>
          <div class="products-body-card">
            <div class="title">测试标题</div>
            <div class="desc">测试简述。。。</div>
            <div class="price">
              <div class="num">￥1000</div>
              <div class="sale">月销 1000</div>
            </div>
          </div>
        </van-cell>
        <van-cell>
          <div class="products-body-content">
            <div class="title">
              测试内容标题
            </div>
          </div>
        </van-cell>
        <van-cell>
          <div class="products-body-comment">
            <div class="title">
              测试评价标题
            </div>
            <div class="comment">
              <div class="user">
                <p>测试用户</p>
                <p>
                  <van-icon @click="toggle" :color="isDot ? 'red' : ''" size="18" :name="isDot ? 'good-job' : 'good-job-o'" />
                  <span>1</span>
                </p>
              </div>
              <p class="desc">测试评价内容</p>
              <p class="date">
                2022-11-17
              </p>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="products-foot">
      <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon :color="toggleCollect ? 'red' : ''" class="collect" @click="collectPhone" :icon="toggleCollect ? 'star' : 'star-o'" :text="toggleCollect ? '已收藏' : '收藏'" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/header/index.vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Icon, Swipe, SwipeItem, Cell, CellGroup } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Cell);
Vue.use(CellGroup);
export default Vue.extend({
  name: 'products',
  components: {
    NavBar,
  },
  data() {
    return {
      value: '',
      isDot: false,
      toggleCollect: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggle() {
      this.isDot = !this.isDot
    },
    collectPhone() {
      this.toggleCollect = !this.toggleCollect;
    }
  }
})
</script>

<style lang="less" scoped>
.products {
  .van-nav-bar {
    padding: 2px 0;
    /deep/.van-nav-bar__title {
      font-size: 18px;
    }
  }
  &-body {
    padding: 0 16px 16px 16px;
    font-size: 12px;
    color: #333;
    .my-swipe .van-swipe-item {
      height: 300px;
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
    .title {
        font-size: 18px;
        font-weight: bold;
      }
    &-card {
      div {
        margin: 8px 0;
      }
      .desc, .price {
        color: #999;
      }
      .price {
        display: flex;
        justify-content: space-between;
        .num {
          font-size: 24px;
          color: rgb(185, 6, 6);
        }
      }
    }
    &-comment {
      .comment {
        // padding: 8px;
        p {
          margin: 4px 0;
          span {
            padding-left: 2px;
          }
        }
        .user {
          font-size: 14px;
          display: flex;
          justify-content: space-between;
        }
        .desc {
          color: #666;
          // padding: 8px;
        }
        .date {
          color: #999;
          text-align: right;
        }
      }
    }
  }
}
</style>