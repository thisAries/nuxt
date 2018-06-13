<template>
    <div class="page">
        <ul class="remind-top">
            <li class="top-item" @click="go('./remind/add')">
                <img src="../../assets/images/ic_add_remind.png" />
                <span>添加提醒</span>
            </li>
            <li class="top-item" @click="go('./remind/list')">
                <img src="../../assets/images/ic_remind_list.png" />
                <span>提醒列表</span>
            </li>
            <li class="top-item" @click="go('./remind/history')">
                <img src="../../assets/images/ic_eat_history.png" />
                <span>服药历史</span>
            </li>
        </ul>
        <div class="remind-item">
            <div class="square"></div>
            <span class="remind-time">06:00</span>
            <div class="remind-p">
                <img class="remind-view" src="../../assets/images/ic_view.png" />
                <span class="remind-title">查看服药详情</span>
                <span style="float:right;font-size:.28rem;color:#9b9b9b;">></span><span class="remind-desc">环磷酰胺 2片</span>
            </div>
            <div class="remind-btn">
                <button class="remind-left">忽略</button>
                <button class="remind-right">完成</button>
            </div>
        </div>
        <div class="remind-item">
            <div class="square"></div>
            <span class="remind-time">06:00</span>
            <div class="remind-p">
                <img class="remind-view" src="../../assets/images/ic_view.png" />
                <span class="remind-title">查看服药详情</span>
                <span style="float:right;font-size:.28rem;color:#9b9b9b;">></span><span class="remind-desc">环磷酰胺 2片</span>
            </div>
            <div class="remind-btn">
                <button class="remind-left">忽略</button>
                <button class="remind-right">完成</button>
            </div>
        </div>
        <div class="remind-item">
            <div class="square"></div>
            <span class="remind-time">06:00</span>
            <div class="remind-p">
                <img class="remind-view" src="../../assets/images/ic_view.png" />
                <span class="remind-title">查看服药详情</span>
                <span style="float:right;font-size:.28rem;color:#9b9b9b;">></span><span class="remind-desc">环磷酰胺 2片</span>
            </div>
            <div class="remind-btn">
                <button class="remind-left">忽略</button>
                <button class="remind-right">完成</button>
            </div>
        </div>
        <div class="remind-item">
            <div class="square"></div>
            <span class="remind-time">06:00</span>
            <div class="remind-p">
                <img class="remind-view" src="../../assets/images/ic_view.png" />
                <span class="remind-title">查看服药详情</span>
                <span style="float:right;font-size:.28rem;color:#9b9b9b;">></span><span class="remind-desc">环磷酰胺 2片</span>
            </div>
            <div class="remind-btn">
                <button class="remind-left">忽略</button>
                <button class="remind-right">完成</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout:'main',
    data(){
        return {

        }
    },
    mounted(){
        console.log(this.$route)
    },
    methods:{
        go(val){
            this.$router.push(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.remind-top{
    display: flex;
    width: 100%;
    height: 2rem;
    padding-top: 0.42rem;
    box-sizing: border-box;
    background: #fff;
    .top-item{
        flex: 1;
        height: 100%;
        text-align: center;  
        img {
            display: block;
            width:1rem;
            height: 1rem;
            margin: 0 auto;
        }
        span{
            color: #4A4A4A;
            font-size: 0.28rem;
            line-height: 0.4rem;
        }
    }
}
//
.remind-item{
    position: relative;
    width: 92%;
    margin: 0.2rem auto 0 auto;
    height: 2.76rem;
    background: #fff;
    border-radius: 0.06rem;
    padding:0.17rem 0.22rem 0 0;
    box-sizing: border-box;
    .square{
        position: absolute;
        width: 0.08rem;
        height: 0.2rem;
        left: 0;
        top: 0.44rem;
        background: #F29647;
    }
    .remind-time{
        display: block;
        margin-left: 0.4rem;
        color:#F29647;
        font-size: 0.5rem;
        font-family:PingFangSC-Medium;
        line-height: 0.7rem;
    }
    .remind-p{
        width: 100%;
        height: 0.45rem;
        margin-top: .2rem;
        padding-left: 0.44rem;
        box-sizing: border-box;
        .remind-view{
            width: 0.38rem;
            height: 0.38rem;
        }
        .remind-title{
            font-size: 0.32rem;
            line-height: 0.45rem;
            color: #000;
            font-family:PingFangSC-Medium;
        }
        .remind-desc{
            width: 1.78rem;
            float: right;
            font-size: 0.28rem;
            color:#9b9b9b;
            font-family:PingFangSC-Regular;
            text-overflow:ellipsis; 
            white-space: nowrap;
            overflow: hidden;
        }
    }
    .remind-btn{
        margin-top: 0.33rem;
        float: right;
        .remind-left{
            width: 1.64rem;
            height: 0.72rem;
            border: solid 0.02rem #cfcfcf;
            background: #fff;
            border-radius: 0.03rem;
            font-size: 0.26rem;
            color:#F29647;
            line-height: 0.72rem;
            text-align: center;
        }
        .remind-right{
            margin-left:.24rem;
            width: 1.64rem;
            height: 0.72rem;
            background:#F29647;
            border-radius: 0.03rem;
            font-size: 0.26rem;
            color:#fff;
            line-height: 0.72rem;
            text-align: center;
        }
    }
    
}
</style>
