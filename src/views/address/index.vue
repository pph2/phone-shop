<template>
  <div class="address">
    <van-address-list 
      v-model="active"
      :list="list"
      disabled-text="超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AddressList, Toast } from 'vant';
Vue.use(AddressList);
export default Vue.extend({
  name: 'address',
  data() {
    return {
      // 默认地址
      active: '1',
      // 地址列表
      list: [],
    }
  },
  methods: {
    onAdd() {
      Toast('新增地址');
    },
    onEdit(item: any, index: number) {
      Toast('编辑地址：' + index);
    },
  }
})
</script>

<style lang="less" scoped>

</style>