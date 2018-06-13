<template>
    <div class="page">
        <div class="box">
            <img class="login-img" src='../../assets/images/login.png' />
            <input type="text" class="inpt bg-a" v-model="account" placeholder="请输入账号" />
            <input type="password" class="inpt bg-b" v-model="password" placeholder="请输入密码" />
            <div class="btn" @click="login">登录</div>
        </div>
    </div>
</template>
<script>
//登录页面
import { MobileReg } from '../../api/public'
import { login } from '../../api/login' 
export default {
    data(){
      return {
          account:'',//账号
          password:'',//
      }
    },
    mounted(){

    },
    methods:{
        vForm(){
            if(!this.account.trim()){
                this.$toast("请输入账号")
                return;
            }
            if(!MobileReg.test(this.account.trim())){
                this.$toast("手机号格式错误")
                return;
            }
            if(!this.password){
                this.$toast("请输入密码")
                return;
            }
            return true
        },
        async login(){
            if(!this.vForm()){
                return;
            }
            var data = {
                "code": "code",
                "mobile": this.account,
                "password": this.password
            }
            let res = await login(data)
            if(res.status == 200){
                console.log(res.data)
            }
            // this.$router.replace("/")
        }
    }
};
</script>

<style lang="scss" scoped>
.page{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:linear-gradient(148.5deg,rgba(255,190,134,1),rgba(242,150,71,1));
    .box{
        margin: 1.8rem auto 0 auto;
        width: 6.64rem;
        height: 6.21rem;
        background: #fff;
        border-radius: 0.05rem;
        padding-top: 0.65rem;
        box-sizing: border-box;
        .login-img{
            display: block;
            width: 5.48rem;
            height: 1.31rem;
            margin: 0 auto 0.4rem auto;
        }
        .inpt{
            display: block;
            width: 5.4rem;
            height:.9rem;
            line-height: .9rem;
            padding-left: 0.6rem;
            box-sizing: border-box;
            margin: 0 auto;
            border-bottom:dashed 0.03rem rgb(136,136,136);
        }
        .bg-a{
            background: url("../../assets/images/ic_phone.png") no-repeat;
            background-size: 0.3rem 0.41rem;
            background-position: 0.05rem 0.22rem;
        }
        .bg-b{
            background: url("../../assets/images/ic_copy.png") no-repeat;
            background-size: 0.32rem 0.38rem;
            background-position: 0.05rem 0.24rem;
        }
        .btn{
            width: 5.86rem;
            height: .89rem;
            margin: 0.6rem auto 0 auto;
            line-height: .89rem;
            font-size: 0.3rem;
            color: #fff;
            text-align: center;
            background: rgba(242,150,71,1)
        }
    }
}
</style>    