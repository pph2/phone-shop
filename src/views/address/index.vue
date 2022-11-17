<template>
  <div class="address">
    <address-header :name="'我的地址'"></address-header>
    <van-address-list 
      v-model="active"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-dialog :show-confirm-button="false" title="修改地址信息" close-on-click-overlay v-model="updateInfoShow">
      <template #default>
        <div class="body">
          <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
          />
        </div>
      </template>
      <template #item-bottom></template>
    </van-dialog>
    <van-dialog v-model="addInfoShow" title="新增地址信息">
    </van-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AddressList, Toast, Dialog, AddressEdit } from 'vant';
import { areaList } from '@vant/area-data';
import AddressHeader from '@/components/header/index.vue'
Vue.use(AddressList);
Vue.use(Dialog);
Vue.use(AddressEdit);
export default Vue.extend({
  name: 'address',
  components: {
    AddressHeader,
  },
  data() {
    return {
      // 默认地址
      active: '1',
      // 地址列表
      list: [
      {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      // 无法送达列表
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
      // 修改地址信息弹框状态
      updateInfoShow: false,
      // 新增地址信息弹框状态
      addInfoShow: false,
      areaList,
      searchResult: [] as any[],
    }
  },
  methods: {
    onAdd() {
      this.addInfoShow = true;
    },
    onEdit(item: any, index: number) {
      this.updateInfoShow = true;
    },
    onSave(content: any) {
      console.log(content);
      
      if(this.addInfoShow) {
        this.addInfoShow = false;
        return
      }
      if(this.updateInfoShow) {
        this.updateInfoShow = false;
        return
      }
    },
    onDelete() {
      // Toast('delete');
      if(this.addInfoShow) {
        this.addInfoShow = false;
        return
      }
      if(this.updateInfoShow) {
        this.updateInfoShow = false;
        return
      }
    },
    onChangeDetail(val: any) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  }
})
</script>

<style lang="less" scoped>
.van-address-list__bottom {
  background-color: transparent;
  bottom: 16px;
}
/deep/.van-address-edit__buttons {
  padding-bottom: 0px;
}
</style>