<template>
  <div id="login">
    <div class="header"></div>
    <div class="login-form">
      <div class="login-container">
        <div class="login-content phone">
          <div><i class="iconfont icon-phone"></i></div>
          <input type="number" v-model="phone" placeholder="请输入手机号"/>
        </div>
        <div class="login-content password">
          <div><i class="iconfont icon-code"></i></div>
          <input type="number" v-model="code" placeholder="请输入验证码"/>
          <div>
            <button :disabled="disabled">{{codename}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="login-btn">
      <button>绑定</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data(){
      return {
        codename: '获取验证码',
        nums: 59,
        disabled: false,
        phone: '',
        code: '',
        eid:''
      }
    },
    methods: {
    },
    mounted(){

    }
  }
</script>

<style stylesheet="style/scss" lang="scss">
  #login {
    width: 100%;
    position: fixed;
    height: 100%;
    background-image: -webkit-radial-gradient(circle, #83bfec 2%, #67abe8 18%, #0163db 60%);
    .header {
      background-image: url("../assets/login_logo.png");
      background-size: 2.86rem 2.39rem;
      background-repeat: no-repeat;
      height: 2.39rem;
      background-position: top;
      margin-top: 1.06rem;
    }
    .login-form {
      width: 100%;
      margin-top: .85rem;
      .login-container {
        width: 6.7rem;
        padding: 0 0.35rem 0 0.6rem;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 0 auto;
        border-radius: 0.1rem;
        .login-content {
          height: 1.2rem;
          display: flex;
          div {
            display: flex;
            align-items: center;
            .iconfont {
              color: #fff;
              font-size: .4rem;
            }
          }
          input {
            border: none;
            margin-left: 0.3rem;
            color: #fff;
            font-size: 0.28rem;
          }
          input:-ms-input-placeholder {
            color: #e2e2e2;
          }
          input::-webkit-input-placeholder {
            color: #e2e2e2;
          }
          &.phone {
            input {
              border: none;
              width: 5.0rem;
              border-bottom: 1px solid #fff;
            }
          }
          button {
            margin-left: .35rem;
            width: 1.7rem;
            height: 0.6rem;
            border: 1px solid #ffc000;
            font-size: 0.24rem;
            color: #333;
            border-radius: 0.1rem;
            background-color: #ffc000;
            &:disabled{
              border: 1px solid #e2e2e2;
              color: #e2e2e2;
              background-color: transparent;
            }
          }
        }
      }
    }
    .login-btn {
      text-align: center;
      button {
        width: 6.7rem;
        height: 0.9rem;
        border: none;
        background: #ffc000;
        margin-top: 0.4rem;
        border-radius: 0.1rem;
        font-size: 0.36rem;
        color: #333;
      }
    }
  }
</style>
