<template>
  <div class="products">
    <van-nav-bar
      title="商品" 
      left-arrow 
      left-text="返回"
      @click-left="onClickLeft"
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
      <van-swipe class="my-swipe" :autoplay="2500" indicator-color="white">
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
            <div class="operation">
              <van-cell-group>
                <van-cell @click="openParameter" is-link>
                  查看参数
                </van-cell>
                <van-cell @click="chooseGoods" is-link>
                  商品/种类
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </van-cell>
        <van-cell>
          <div class="products-body-content">
            <div class="title">
              测试内容标题
            </div>
            <div class="body">
              <img src="" alt="商品图片">
            </div>
          </div>
        </van-cell>
        <van-cell class="test">
          <div class="products-body-comment">
            <div class="title">
              测试评价标题
            </div>
            <div v-for="(item, index) in testList" :key="index" class="comment">
              <div class="user">
                <p>{{ item.name }}</p>
                <p>
                  <van-icon @click="toggle(index)" :color="item.isDot ? 'red' : ''" size="18" :name="item.isDot ? 'good-job' : 'good-job-o'" />
                  <span>{{ item.badge }}</span>
                </p>
              </div>
              <p class="desc">{{ item.content }}</p>
              <p class="date">{{ item.createDate }}</p>
            </div>
            <!-- <div class="comment">
              <div class="user">
                <p>测试用户</p>
                <p>
                  <van-icon @click="toggle" :color="isDot ? 'red' : ''" size="18" :name="isDot ? 'good-job' : 'good-job-o'" />
                  <span>{{ currentCount }}</span>
                </p>
              </div>
              <p class="desc">测试评价内容</p>
              <p class="date">
                2022-11-17
              </p>
            </div>
            <div class="comment">
              <div class="user">
                <p>测试test</p>
                <p>
                  <van-icon @click="toggle" :color="isDot ? 'red' : ''" size="18" :name="isDot ? 'good-job' : 'good-job-o'" />
                  <span>{{ currentCount }}</span>
                </p>
              </div>
              <p class="desc">test评价内容</p>
              <p class="date">
                2022-11-17
              </p>
            </div> -->
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
    <van-action-sheet v-model="parameterToggle" title="参数">
      <div class="products-action">
        <div class="wrapper">
          <div class="content">
            <div class="num">
              <div class="type">
                名称
              </div>
              <div class="desc">
                测试内容
              </div>
            </div>
            <div class="num">
              <div class="type">
                配置
              </div>
              <div class="desc">
                测试配置内容
              </div>
            </div>
            <div class="num">
              <div class="type">
                发货地
              </div>
              <div class="desc">
                测试发货内容
              </div>
            </div>
            <div class="num">
              <div class="type">
                寄送范围
              </div>
              <div class="desc">
                全国
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="goodsToggle" title="选择商品">
      <div class="products-action">
        <div class="wrapper">
          <div class="content">
            <div class="card">
              <div class="type">
                类型
              </div>
              <div class="desc">
                <div v-for="(i, index) in 5" :key="index" @click="changeActive(index, 0)" :class="typeRadio === index ? 'active' : ''">测试商品</div>
              </div>
            </div>
            <div class="card">
              <div class="type">
                内存/存储
              </div>
              <div class="desc">
                <div v-for="(i, index) in 5" :key="index" @click="changeActive(index, 1)" :class="storageRadio === index ? 'active' : ''">8G+128G</div>
              </div>
            </div>
            <div class="num">
              <div>数量</div>
              <van-stepper theme="round" button-size="22" disable-input v-model="num" />
            </div>
          </div>
        </div>
        <div class="button">
          <div @click="addCart" class="left">加入购物车</div>
          <div @click="buyGoods" class="right">立即购买</div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/header/index.vue';
import { updateUserCollection, removeUserCollection } from '@/api/collection/index';
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Icon, Swipe, SwipeItem, Cell, CellGroup, ActionSheet, RadioGroup, Radio, Stepper, Dialog, Toast } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(ActionSheet);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Stepper);
Vue.use(Dialog);
Vue.use(Toast);
export default Vue.extend({
  name: 'products',
  components: {
    NavBar,
  },
  data() {
    return {
      value: '',
      toggleCollect: false,
      currentCount: 1,
      parameterToggle: false,
      goodsToggle: false,
      typeRadio: 0,
      storageRadio: 0,
      num: 1,
      testList: [
        {
          name: 'pipihai',
          content: '测试内容',
          badge: 1,
          isDot: false,
          createDate: '2022-11-17',
        },{
          name: 'pph',
          content: '测试内容',
          isDot: false,
          badge: 1,
          createDate: '2022-11-18',
        },{
          name: 'pipihai123',
          content: '啊哈哈',
          isDot: false,
          badge: 6,
          createDate: '2022-12-20',
        },{
          name: 'pph123',
          content: '测试内容啊哈哈哈',
          isDot: false,
          badge: 4,
          createDate: '2023-1-8',
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggle(index: number) {
      if(this.testList[index].isDot === false) {
        this.testList[index].isDot = true;
        this.testList[index].badge++;
      } else {
        this.testList[index].isDot = false;
        this.testList[index].badge--;
      }
    },
    /**
     * 根据toggleCollect判断是否收藏
     */
    collectPhone() {
      const userId = '';
      const goodsId = this.$route.params.productsId;
      if(this.toggleCollect === false) {
        this.addCollectPhone(userId, goodsId)
      } else {
        this.removeCollectPhone(userId, goodsId)
      }
      this.toggleCollect = !this.toggleCollect;
    },
    addCollectPhone(userId: string, goodsId: string) {
      // const userId = sessionStorage.getItem('userId');
      updateUserCollection(userId, goodsId).then(() => {
        this.toggleCollect = true;
      })
    },
    removeCollectPhone(userId: string, goodsId: string) {
      removeUserCollection(userId, goodsId).then(() => {
        this.toggleCollect = false;
      })
    },
    checkUserVerify() {
      const userInfo = sessionStorage.getItem('userInfo');
      if(userInfo) {
        return true;
      } else {
        return false;
      }
    },
    onClickLeft() {
      sessionStorage.removeItem('goodsInfo');
      this.$router.go(-1);
    },
    openParameter() {
      this.parameterToggle = true;
    },
    chooseGoods() {
      this.goodsToggle = true;
    },
    // 更换型号
    changeActive(id: number, typeNumber: number) {
      (typeNumber === 0)&&(this.typeRadio = id);
      (typeNumber === 1)&&(this.storageRadio = id);
    },
    // 添加购物车
    addCart() {
      this.$toast('已加入购物车');
    },
    // 购买商品
    buyGoods() {
      this.$dialog.alert(
        {
          message: '确定购买商品吗？',
          showCancelButton: true,
          theme: 'round',
        }
      ).then(() => {
        this.goodsToggle = false;
      }).catch((e) => {
        console.log(e);
      })
    },
    // // 删除商品
    // removeGoods() {
    //   this.$dialog.alert(
    //     {
    //       message: '确定移除商品吗？',
    //       showCancelButton: true,
    //       theme: 'round',
    //     }
    //   ).then(() => {
    //     const { name } = this.testList;
    //     updateGoods(name).then((res) => {
    //       console.log(res);
          
    //     })
    //   }).catch(e => {
    //     console.log(e);
        
    //   })
    // }
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
      .operation {
        .van-cell {
          padding: 0
        }
      }
    }
    &-content {
      .body {
        img {
          margin-top: 16px;
          width: 100%;
        }
      }
    }
    &-comment {
      padding: 8px 0 16px 0;
      .comment {
        padding: 8px 0;
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
  &-action {
    max-height: 500px;
    position: relative;
    .wrapper {
      // height: 300px;
      font-size: 12px;
      overflow: scroll;
      color: #999;
      .content {
        // height: 900px;
          .card, .num {
          margin: 16px;
        }
        .card {
          .desc {
            display: flex;
            margin-top: 8px;
            flex-wrap: wrap;
            div {
              padding: 4px 8px;
              margin: 0 16px 8px 0;
              border: 1px solid;
              border-radius: 30px;
            }
            .active {
              color: #fff;
              background: red;
              border-color: red;
            }
          }
        }
        .num {
          display: flex;
          align-items: center;
          div {
            margin-right: 16px;
          }
        }
      }
    }
    .button {
      // position: absolute;
      margin: 0 auto;
      width: 90%;
      height: 36px;
      display: flex;
      line-height: 36px;
      margin-bottom: 16px;
      // bottom: 16px;
      div {
        flex: 1;
        text-align: center;
        color: #fff;
      }
      .left {
        border-top-left-radius: 999px;
        border-bottom-left-radius: 999px;
        background: linear-gradient(to right, #ffd01e, #ff8917);
      }
      .right {
        border-top-right-radius: 999px;
        border-bottom-right-radius: 999px;
        background: linear-gradient(to right, #ff6034, #ee0a24);
      }
    }
  }
}
</style>