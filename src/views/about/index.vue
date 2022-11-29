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
          <van-sidebar-item title="测试" />
          <van-sidebar-item title="测试" />
          <van-sidebar-item title="测试" />
        </van-sidebar>
      </div>
      <div class="about-body-right">
        <div class="card" @click="toProducts">
          <div class="pic"></div>
          <div class="desc">
            <div class="title">测试标题</div>
            <div class="price">
              <div class="left">
                ￥<span>123</span>
              </div>
              <div class="right">
                月售 <span>99</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="pic"></div>
          <div class="desc">
            <div class="title"></div>
            <div class="price"></div>
          </div>
        </div>
        <!-- <div class="card">
          <div class="pic"></div>
          <div class="desc">
            <div class="title">测试标题</div>
            <div class="price"><span>123</span></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getPhonesListQuery } from '@/api/goods/index'
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
      phoneList: [],
    }
  },
  methods: {
    toSearch() {
      this.$router.push('/search');
    },
    getPhoneList() {
      // const userId = sessionStorage.getItem('userId');
      const userId = '';
      const type = '';
      getPhonesListQuery(userId, type).then((res: any) => {
        this.phoneList = res;
      })
    },
    toProducts() {
      console.log('123');
      const productId = '32142';
      this.$router.push({
        name: 'products',
        params: { productId }
      })
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
    &-left {
      height: 100vh;
      background-color: #f7f8fa;
    }
    &-right {
      width: 75%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-right: 10px;
      .card {
        width: 47%;
        height: 27vh;
        margin-bottom: 16px;
        .pic{
          height: 76%;
        }
        .title {
          margin: 4px 0;
        }
        .price {
          display: flex;
          justify-content: space-between;
          .left {
            color: rgb(186, 0, 0);
            span {
              font-size: 18px;
              font-weight: bold;
            }
          }
          .right {
            align-self: center;
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>