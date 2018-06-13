<template>
    <ul class="Menu-box">
        <li @click="go('/')">
            <img v-if="$route.name == 'index'" class="Menu-img" src="../assets/images/ic_tab_home.png" />
            <img v-if="$route.name != 'index'" class="Menu-img" src="../assets/images/ic_tab_home_normal.png" />
            <span :class="{active:$route.name == 'index'}">首页</span>
        </li>
        <li @click="go('/remind')">
            <img v-if="$route.name == 'remind'" class="Menu-img" src="../assets/images/ic_tab_remind.png" />
            <img v-if="$route.name != 'remind'" class="Menu-img" src="../assets/images/ic_tab_remind_normal.png" />
            <span :class="{active:$route.name == 'remind'}">服务提醒</span>
        </li>
        <li @click="go('/gain')">
            <img v-if="$route.name == 'gain'" class="Menu-img" src="../assets/images/ic_tab_appointment.png" />
            <img v-if="$route.name != 'gain'" class="Menu-img" src="../assets/images/ic_tab_appointment_normal.png" />
            <span :class="{active:$route.name == 'gain'}">病房预约</span>
        </li>
        <li @click="go('/mine')">
            <img v-if="$route.name == 'mine'" class="Menu-img" src="../assets/images/ic_tab_my.png" />
            <img v-if="$route.name != 'mine'" class="Menu-img" src="../assets/images/ic_tab_my_normal.png" />
            <span :class="{active:$route.name == 'mine'}">个人中心</span>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            Index:0,//tab选择
        }
    },
    methods:{
        go(val){
            this.$router.push(val)
        }
    }
}
</script>

<style lang="scss">
    .Menu-box{
        display: flex;
        width: 100%;
        height: 0.98rem;
        border-top:solid 0.02rem rgb(234,234,234); 
        background: #fff;
        li{
            flex: 1;
            text-align: center;
            color: rgb(155,155,155);
            .Menu-img{
                display: block;
                width:0.44rem;
                height: 0.44rem;
                margin: 0.12rem auto 0 auto;
            }
            .active{
                color:rgb(242,150,71)
            }
            span{
                margin-top: 0.05rem;
                font-size: 0.22rem;
            }
        }
    }
</style>