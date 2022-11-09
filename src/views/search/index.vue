<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Search } from 'vant';
Vue.use(Search);
export default Vue.extend({
  data() {
    return {
      value: ''
    }
  }
})
</script>

<style lang="less" scoped>

</style>