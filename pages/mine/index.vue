<template>
    <div class="page">
        <img class="mine-top" src="../../assets/images/pic_banner2.png" />
        <ul class="mine-menu">
            <li class="mine-item" @click="go('./mine/personal')">
                <img class="item-left" src="../../assets/images/ic_my_basic.png" />
                <span>基本信息</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/demo')">
                <img class="item-left" src="../../assets/images/ic_my_account.png" />
                <span>病例管理</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/subse')">
                <img class="item-left" src="../../assets/images/ic_my_clinic.png" />
                <span>我的复诊</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/message')">
                <img class="item-left" src="../../assets/images/ic_my_center.png" />
                <span>我的消息</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="dialog = true">
                <img class="item-left" src="../../assets/images/ic_my_remind.png" />
                <span>提醒设置</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/record')">
                <img class="item-left" src="../../assets/images/ic_my_infomation_uploading.png" />
                <span>上传记录</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/notice')">
                <img class="item-left" src="../../assets/images/ic_my_infomation_system.png" />
                <span>系统通知</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/replies')">
                <img class="item-left" src="../../assets/images/ic_my_doctor.png" />
                <span>联系医生</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
            <li class="mine-item" @click="go('./mine/feedback')">
                <img class="item-left" src="../../assets/images/ic_my_information.png" />
                <span>意见反馈</span>
                <img class="item-right" src="../../assets/images/right.png" />
            </li>
        </ul>
        <div class="mask" v-if="dialog" @click="dialog = false">
            <div class="dialog" @click="stop">
                <div class="dialog-title">请选择提醒类别</div>
                <div class="dialog-box">
                    <div class="dialog-a" @click="go('../remind/add')">
                        <img src = "../../assets/images/ic_medication_reminder.png" />
                        <div class="dialog-right">
                            <p class="dialog-t1">服药提醒</p>
                            <p class="dialog-t2">Medication reminder</p>
                        </div>
                    </div>
                    <div class="dialog-b" @click="go('./mine/visit')">
                        <img src = "../../assets/images/ic_medication reminder.png" />
                        <div class="dialog-right">
                            <p class="dialog-t1">复诊提醒</p>
                            <p class="dialog-t2">Appointment reminder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout:'main', 
    data(){
        return {
            dialog:false,
        }
    },
    created(){
        if(!this.$store.opend){
            this.$router.replace("./login")
        }
    },
    methods:{
        go(val){
            this.$router.push(val)
        },
        stop(){
            event.stopPropagation();
        }
    }
}
</script>

<style lang="scss" scoped>
.mine-menu{
    width: 100%;
    background: #fff;
    padding: 0 0.36rem;
    box-sizing: border-box;
    .mine-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.05rem;
        border-bottom:solid 0.02rem #D7D7D7;
        .item-left{
            width: .4rem;
            height: .4rem;
            margin-right: .28rem;
        }
        .item-right{
            width: .13rem;
            height: .25rem;
            margin-right: 0.22rem;
        }
        span{
            flex:1;
        }
    }
}
.dialog{
    width: 5.6rem;
    height: 4.68rem;
    border-radius: .08rem;
    background: #fff;
    .dialog-title{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        font-size: .32rem;
        font-weight: 600;
        text-align: center;
        color:#141414;
        border-bottom: solid 0.02rem #e5e5e5;
    }
    .dialog-box{
        padding: .48rem .55rem;
        .dialog-a{
            display: flex;
            width: 4.5rem;
            height: 1.11rem;
            padding: .2rem 0 .25rem .35rem;
            border-radius: .1rem;
            background: #ED9D59;
            // background: url("../../assets/images/")
            img{
                width: .7rem;
                height: .7rem;
            }
        }
        .dialog-b{
            display: flex;
            margin-top: .4rem;
            width: 4.5rem;
            height: 1.11rem;
            padding: .2rem 0 .25rem .35rem;
            border-radius: .1rem;
            background: #598DC9;
            img{
                width: .7rem;
                height: .7rem;
            }
        }
    }
}
.dialog-t1{
    font-size: .28rem;
    color: #fff;
    line-height: .4rem;
}
.dialog-t2{
    font-size: .24rem;
    color: #fff;
    line-height: .33rem;
}
.dialog-right{
    margin-left: .26rem;  
}
</style>
