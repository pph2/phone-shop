<template>
  <div class="login">
    <div class="content">
      <div class="login-title">
        注册
      </div>
      <div class="login-content">
        <van-form @submit="onRegister">
          <van-field
            v-model="username"
            name="name"
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
          />
          <van-field
            v-model="confirmPassword"
            type="password"
            name="confirmPassword"
            label="确认密码"
            placeholder="请再次输入密码"
          />
          <van-field
            v-model="telephone"
            type="tel"
            name="telephone"
            label="手机号码"
            placeholder="请输入手机号码"
          />
        </van-form>
        <div class="button">
            <van-button round block type="info" @click="onCancel">重置</van-button>
           <van-button round block type="info" @click="onRegister">注册</van-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form, Field, Button } from 'vant';
Vue.use(Form),
Vue.use(Field),
Vue.use(Button)
export default Vue.extend({
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      telephone: '',
    };
  },
  methods: {
    onRegister(values: any) {
      console.log('submit', values);
      this.$router.push('/home')
    },
    onCancel() {
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
      this.telephone = '';
    }
  },
})
</script>

<style lang="less" scoped>
body, html {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.login {
  width: 100%;
  min-height: 100vh;
  background-color: lightgreen;
  // background-size: 100% 100%;
  &-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 16px;
  }
  &-content {
    /deep/.van-cell {
      border-radius: 20px;
      margin: 8px 0;
    }
    .button {
      margin-top: 16px;
      display: flex;
      /deep/.van-button {
        margin: 0 8px;
      }
    }
  }
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
}
</style>