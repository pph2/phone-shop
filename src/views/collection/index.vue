<template>
  <div class="collection">
    <van-checkbox-group v-model="active">
      <van-cell-group title="测试收藏商品1" >
      <van-cell @click="toggleChecked(1)">
          <div class="collection-card">
            <div class="pic"></div>
            <div class="left">
              <p class="title">商品1</p>
              <p class="desc">商品描述</p>
              <p class="money">￥39.9</p>
            </div>
            <div class="right">
              <van-checkbox ref="checkboxes"></van-checkbox>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <van-dialog 
      v-model="isActive" 
      title="删除商品" 
      show-cancel-button
      confirm-button-text="确定"
      cancel-button-text="取消"
      @confirm="checkDelete"
      @cancel="closeDialog"
    >
      <div>确定删除此收藏商品吗？</div>
    </van-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cell, CellGroup, Checkbox, CheckboxGroup, Dialog } from 'vant';

import { collectListQuery } from '@/api/collection/index'

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Dialog);
export default Vue.extend({
  name: 'collection',
  data() {
    return {
      value: 0,
      active: [],
      username: 'longhai',
      userId:'123456',
      isActive: false,
      checkAll: false,
    }
  },
  methods: {
    toggleChecked(index: number) {
      (this.$refs as any).checkboxes[index].toggle()
    },
    /**
     * 切换全选
     */
    toggleCheckedAll() {
      this.checkAll = !this.checkAll;
      (this.$refs.checkboxGroup as CheckboxGroup).toggleAll(this.checkAll);
    },
    /**
     * 获取收藏列表
     */
    getCollectList() {
      const { username = '', userId = '' } = this;
      collectListQuery(username, userId)  
    },
    /**
     * 删除收藏
     */
    checkDelete() {
      console.log(this.active);
      // const { goodsName: '', goodsId: '' } = this.active[0];
      const userId = sessionStorage.getItem('userId');
    },
    closeDialog() {
      this.isActive = false;
    },
    initData() {
      // this.checkDelete();
      this.getCollectList();
    }
  },
})
</script>

<style lang="less" scoped>
.collection {
  &-card {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    line-height: 18px;
    .pic {
      width: 30%;
    }
    .left {
      width: 60%;
      .desc {
        font-size: 12px;
      }
    }
    .right {
      width: 5%;
    }
  }
}
</style>