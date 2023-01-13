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
            @input="checkPassword(confirmPassword)"
            @blur="cancelErrorMessage"
            placeholder="请再次输入密码"
            :error-message="errorMessage"
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
import { Form, Field, Button, Toast } from 'vant';
import { authRegister } from '@/api/login';
Vue.use(Form),
Vue.use(Field),
Vue.use(Button),
Vue.use(Toast)
export default Vue.extend({
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      telephone: '',
      errorMessage: ''
    };
  },
  methods: {
    checkPassword(value: string) {
      if(this.password === value) {
        this.errorMessage = ''
      } else {
        this.errorMessage = '密码不匹配'
      }
    },
    cancelErrorMessage() {
      if(!this.confirmPassword) {
        this.errorMessage = '';
      }
    },
    onRegister() {
      // console.log('submit', values);
      if(!this.errorMessage) {
        authRegister(this.username, this.password, this.telephone).then((res: any) => {
          this.$toast('注册成功');
        }).catch(e => {
          console.log(e);
          this.$toast(e.message);
          return;
        })
        setTimeout(() => {
            this.$router.push({name: 'login'})
        }, 500);
      }
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