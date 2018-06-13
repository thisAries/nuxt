<template>
    <div class="page">
 
        <div class="view-item">
            <div class="item-top">
                <img src = "../../../assets/images/ic_head_doctor.png" />
                <div class="top-title">
                    <div class="top-a">张医生</div>
                    <div class="top-b">2018.08.29 20：30</div>
                </div>
            </div>
            <div class="item-content">你好！根据您给的一些病状的特征显示，请您不用担心，您的症状是因为感冒发烧而引起的喉咙疼痛，的一些病状的特征显示，请您不用担心，您的症状是因为感冒发烧而引起的喉咙疼痛，待感冒好了后您可服用一些止咳药，的一些病状的特征显示，请您不用担心，您的症状是因为感冒发烧而引起的喉咙疼痛，待感冒好了后您可服用一些止咳药，的一些病状的特征显示，请您不用担心，您的症状是因为感冒发烧而引起的喉咙疼痛，待感冒好了后您可服用一些止咳药，的一些病状的特征显示，请您不用担心，您的症状是因为感冒发烧而引起的喉咙疼痛，待感冒好了后您可服用一些止咳药，</div>
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
.page{
    padding-top: .2rem;
}
.view-item{
    width: 6.9rem;
    min-height: 3rem;
    margin: 0 auto .2rem auto;
    padding: .28rem;
    box-sizing: border-box;
    background: #fff;
    .item-top{
        display: flex;
        padding-bottom: .25rem;
        border-bottom: solid 0.01rem #D7D7D7;
        img{
            border-radius: 50%;
            overflow: hidden;
            width: .82rem;
            height: .82rem;
            margin-right: .34rem;
        }
        .top-title{
            flex: 1;
            height: .82rem;
            .top-a{
                font-size: .3rem;
                color: #333;
            }
            .top-b{
                font-size: .26rem;
                color: #9b9b9b;
            }
        }
    }
    .item-content{
        width: 6.33rem;
        min-height: 1.15rem;
        margin-top: .18rem;
        font-size: .26rem;
        color: #6A6A6A;
    }
}
</style>
