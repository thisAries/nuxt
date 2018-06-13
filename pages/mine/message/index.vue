<template>
    <div class="page">
        <!-- 我的消息 -->
        <div class="box">
            <!-- 对于一些内容少的item 没有必要做循环 html和css始终要比js的流畅度和速度更快一些 -->
            <div class="view-item" @click="go('./message/doctor')">
                <img src = "../../../assets/images/ic_my_reply.png" />
                <span>医生回复</span>
                <img src = "../../../assets/images/ic_next.png" />
            </div>
            <div class="view-item" @click="go('./message/visit')">
                <img src = "../../../assets/images/ic_my_infomation_clinic.png" />
                <span>复诊通知</span>
                <img src = "../../../assets/images/ic_next.png" />
            </div>
            <div class="view-item" @click="go('./message/pre')">
                <img src = "../../../assets/images/ic_my_infomation_appointment.png" />
                <span>预约通知</span>
                <img src = "../../../assets/images/ic_next.png" />
            </div>
            <div class="view-item" @click="go('./message/notice')">
                <img src = "../../../assets/images/ic_my_infomation_threshold.png" />
                <span>超阈值通知</span>
                <img src = "../../../assets/images/ic_next.png" />
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        go(val){
            this.$router.push(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 4.23rem;
    background: #fff;
    padding: 0 .39rem;
    box-sizing: border-box;
    .view-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.06rem;
        padding-top: .12rem;
        border-bottom: solid 0.01rem #D7D7D7;
        img {
            width: .4rem;
            height: .4rem;
            margin-right: .15rem
        }
        span{
            flex: 1;
            margin-left:.1rem;
        }
    }
}

</style>
