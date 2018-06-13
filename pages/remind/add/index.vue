<template>
    <div class="page">
        <div class="config">
            <div class="fig-item">
                <img class="item-left" src = "../../../assets/images/ic_date.png" />
                <span class="item-title">起始日期</span>
                <div class="item-teg">
                    <span>2018/03/10</span>
                    <img src = "../../../assets/images/ic_select.png" />
                </div>
            </div>
            <div class="fig-item">
                <img class="item-left" src = "../../../assets/images/ic_date.png" />
                <span class="item-title">结束日期</span>
                <div class="item-teg">
                    <span>2018/03/12</span>
                    <img src = "../../../assets/images/ic_select.png" />
                </div>
            </div>
            <div class="fig-item">
                <img class="item-left" src = "../../../assets/images/ic_time.png" />
                <span class="item-title">时间</span>
                <div class="item-teg">
                    <span>11:00</span>
                    <img src = "../../../assets/images/ic_select.png" />
                </div>
            </div>
            <div class="fig-item">
                <img class="item-left" src="../../../assets/images/ic_date.png" />
                <span class="item-title">提醒频率</span>
                <div class="item-teg">
                    <span>每6小时</span>
                    <img src = "../../../assets/images/ic_select.png" />
                </div>
            </div>
        </div>
        <div class="select" @click="go('./add/choose')">
            <span>选择药物</span>
            <img src="../../../assets/images/right.png"/>
        </div>
        <!-- 以下 是脱离文档流部分 -->
    
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
.config{
    width: 100%;
    height: 4.2rem;
    padding: 0.1rem 0.5rem .4rem .5rem;
    box-sizing: border-box;
    background: #fff;
    .fig-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.72rem;
        margin-top: .2rem;
        .item-left{
            width: .4rem;
            height: .4rem;
        }
        .item-title{
            width: 1.2rem;
            margin-left: .25rem;
            font-size: .28rem;
            color: #6a6a6a;
        }
        .item-teg{
            margin-left: .25rem;
            flex: 1;
            padding-left: .28rem;
            box-sizing: border-box;
            height: .72rem;
            line-height: .72rem;
            border: solid 0.01rem #DFE3E8;
            img{
                float: right;
                margin-top: 0.14rem;
                margin-right: 0.1rem;
                width: 0.45rem;
                height: 0.45rem;
            }
        }
    }
}
.select{
    display: flex;
    align-items: center;
    width: 100%;
    height: .9rem;
    background: #fff;
    margin-top: .2rem;
    span{
        flex: 1;
        margin-left: .52rem;
        font-size:.32rem;
        color: #333;
    }
    img {
        width: .15rem;
        height: .26rem;
        margin-right: .37rem;
    }
}
</style>
