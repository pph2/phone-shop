<template>
  <div class="comment">
    <van-cell-group>
      <van-cell>
        <div class="comment-card">
          <div class="pic"></div>
          <div class="desc">
            <p class="shop-name van-multi-ellipsis van-hairline--bottom">商品名称</p>
            <p class="shop-comment van-multi-ellipsis--l2">商品评价：21312呃</p>
          </div>
          <div class="button">
            <van-icon name="ellipsis" />
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Cell, CellGroup, Icon } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
export default Vue.extend({
  name: 'comment',
  data() {
    return {
      value: 0,
    }
  }
})
</script>

<style lang="less" scoped>
.comment {
  padding: 16px;
  &-card {
    display: flex;
    align-content: center;
    .pic {
      width: 30%;
    }
    .desc {
      width: 60%;
      color: #333;
      .shop-name {
        font-size: 16px;
      }
      .shop-comment {
        font-size: 12px;
      }
    }
    .button {
      width: 5%;
      transform: rotateX('90');
    }
  }
}
</style>