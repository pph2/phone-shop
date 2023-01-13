<template>
  <div class="login">
    <div class="content">
      <div class="login-title">
        手机商城系统
      </div>
      <div class="login-content">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="name"
            label="用户名"
            placeholder="用户名"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
          />
        </van-form>
        <div class="button">
           <van-button round block type="info" @click="toRegister">注册</van-button>
           <van-button round block type="info" @click="onSubmit">登录</van-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form, Field, Button } from 'vant';
import { authLogin } from '@/api/login';
Vue.use(Form),
Vue.use(Field),
Vue.use(Button)
export default Vue.extend({
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      authLogin(this.username, this.password).then((res: any) => {
        console.log(res);
        if(res.code === 0) {
          const loginInfo = res.result.destoken;
          const token = res.result.token;
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('loginInfo', loginInfo);
          setTimeout(() => {
          this.$router.push({name: 'home'})
      })
        } else {
          console.log(res);
          return false;
        }
      }).catch(e => {
        console.log(e);
      });
    },
    toRegister() {
      this.username = '';
      this.password = '';
      this.$router.push({name: 'register'});
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