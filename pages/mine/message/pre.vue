<template>
    <div class="page">
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <p class="title">您预约了今天的床位，记得准时到达哦！</p>
            <p class="note">带上上次的抽血体检报告</p>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <p class="title">您预约了今天的床位，记得准时到达哦！</p>
            <p class="note">带上上次的抽血体检报告</p>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <p class="title">您预约了今天的床位，记得准时到达哦！</p>
            <p class="note">带上上次的抽血体检报告</p>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <p class="title">您预约了今天的床位，记得准时到达哦！</p>
            <p class="note">带上上次的抽血体检报告</p>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <p class="title">您预约了今天的床位，记得准时到达哦！</p>
            <p class="note">带上上次的抽血体检报告</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    padding: .3rem .35rem;
} 
.view-item{
    position: relative;
    width: 6.9rem;
    min-height: 2.02rem;
    margin: 0 auto .2rem auto;
    padding: .28rem 0 .28rem .69rem;
    box-sizing: border-box;
    border-radius: .08rem;
    background: #ffffff;
    .view-icon{
        position: absolute;
        top: .4rem;
        left: .29rem;
        width: .14rem;
        height: .14rem;
        border-radius: 50%;
        background-color: #F29647;
    }
    .date{
        font-size: .26rem;
        color: #6A6A6A;
        line-height: .37rem;
    }
    .title{
        width: 100%;
        margin-top: .17rem;
        min-height:.42rem;
        line-height: .42rem;
        font-size: .3rem;
        color: #6a6a6a;
    }
    .note{
        width: 100%;
        min-height: .4rem;
        font-size: .28rem;
        color: #9b9b9b;
        margin-top: .14rem;
    }
}
</style>
