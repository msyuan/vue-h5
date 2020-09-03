<template>
  <div class="login-box">
    <img class="logo" src="../assets/images/logo.png" alt="商城logo">
    <div class="form-box">
      <div class="form-group">
        <label class="icon account-icon"></label>
        <input type="number" class="input-item" maxlength="11" v-model="phone" placeholder="请输入手机号">
      </div>
      <div class="form-group">
        <label class="icon password-icon"></label>
        <input type="text" class="input-item" v-model="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="ui-btn login-btn" @click="confirmSubmit">登录</div>
    <div class="login-reg" @click="gotoRegister">新用户注册</div>
  </div>
</template>
<script>
import '../assets/css/login.less'
import { reg } from '@/utils/common'
import { userLogin } from '@/service/users'
export default {
  data() {
    return {
      phone:'',
      password:''
    }
  },
  methods: {
    confirmSubmit(){
      var re_phone = reg.phone;
      var phone = this.phone;
      var password = this.password;
      if(!phone){
        this.$toast('请输入手机号码');
        return 
      }else if(!re_phone.test(phone)){
        this.$toast('请填写正确的手机号');
        return
      }else if(!password){
        this.$toast('请输入密码');
        return
      }
      var params = {
        phone:phone,
        password:password
      }
      userLogin(params).then(data =>{
        if(data.code == 1004){
           //登录成功后直接进入首页
          this.$toast(data.msg);
          setTimeout(()=>{
            this.$router.push({ path: '/home'})
          },1000)
        }else{
          this.$toast(data.msg);
        }
      })
    },
    gotoRegister(){
      // this.$router.push({ path: 'register'})
    }
  },
}
</script>


