<template>
  <div class="login">
    <!-- 下载组件 -->
    <guide/>
    <!-- 导航栏 -->
    <nav-bar showType="text" title="登入" class="nav-bars"></nav-bar>
    <!-- 表单 -->
    <section>
      <form method="POST">
        <div class="login-wap">
          <div class="login-logo logo-wap">
            <img :src="`${pub.config.static}images/icon.png`">
          </div>
          <div class="group-login">
            <div class="login-error" v-show="showError">{{errMsg}}</div>
            <input type="text" class="login-id" v-model="account" placeholder="请输入你的登入电邮地址"/>
            <div class="login-pass">
              <input :type="showPwd?'text':'password'" class="login-pwd" v-model="password" placeholder="请输入密码">
              <span class="login-show-pwd" @click="showPwds">
                <svg class="icon" aria-hidden="true" >
                  <use :xlink:href="!showPwd?'#icon-showpwd':'#icon-hidpwd'"/>
                </svg>
              </span>
            </div>

            <van-button size="large" :loading="loading" type="danger">登录</van-button>
            <div class="login-find">
              <router-link to="/account/forget/">
                <span class="login-forget">忘记密码</span>
              </router-link>
              |
              <router-link class="login-register" to="/account/register/">
                注册账号
              </router-link>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import guide from '../components/guide'
import NavBar from '../components/NavBar'
import {Button} from 'vant'
export default {
  data(){
    return{
      showPwd:false,
      account:'',
      password:'',
      errMsg:'',
      showError:false,
      loading: false,
    }
  },
  components:{
    guide,
    NavBar,
    [Button.name]:Button
  },
  methods:{
    checkForm(){
      // 去除邮箱空格
      this.account=this.account.trim()
      // 验证格式
      if(!this.account){
        this.errMsg="邮箱地址不能为空"
        this.showError=true
        return false
      }
    },
    showPwds(){
      this.showPwd=!this.showPwd
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  height: 100%;
  section{
    width: 100%;
  }
}
.login-wap{
  width: 100%;
  padding-top: 10px;
  max-width: 470px;
  margin: auto;
  .login-error{
    width: 100%;
    text-align: center;
    color: #ea1b23;
    margin-bottom: 10px;
  }
  img{
    width: 40%;
  }
  .group-login{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    padding-top: 35px;
    border-radius: 3px;


    input{
      height: 40px;
      padding: 5px 0 5px 20px;
      border: none;
      background: #f5f5f5;
    }
    .login-pwd{
      border-top: 1px solid #ececec;
      width: 94%;
    }
    .login-pass{
      box-sizing: border-box;
      position: relative;
      width: 100%;
      
    }
    .login-show-pwd{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
    .login-find{
      margin-top: 15px;
      color: #c9c9c9;
    }
    .van-button--danger{
      margin-top: 20px;
    }
    .login-forget{
      color: #c9c9c9;
      display: inline-block;
      margin-right: 10px;
    }
    .login-register{
      color: #3090ff;
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
