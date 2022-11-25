<template>
  <div class="header">
    <van-nav-bar
      :title="name"
      left-arrow
      left-text="返回"
      @click-left="goback"
    >
      <template v-if="rightButton !== ''" #right>
        <van-icon :name="rightButton" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavBar, Icon } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    rightButton: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
})
</script>

<style lang="less" scoped>

</style>