<template>
    <div class="page">
        <div class="top">照顾好自己</div>
        <div class="view-item">
            <div class="item-left">复诊</div>
            <div class="item-top">
                <div class="item-date">10:00</div>
                <mt-switch style="margin-right:.26rem"></mt-switch>
            </div>
            <p class="item-middle">8月9日</p>
            <p class="item-bottom">检查血压</p>
        </div>
        <div class="view-item">
            <div class="item-left">复诊</div>
            <div class="item-top">
                <div class="item-date">10:00</div>
                <mt-switch style="margin-right:.26rem"></mt-switch>
            </div>
            <p class="item-middle">8月9日</p>
            <p class="item-bottom">检查血压</p>
        </div>
        <div class="view-item">
            <div class="item-left">复诊</div>
            <div class="item-top">
                <div class="item-date">10:00</div>
                <mt-switch style="margin-right:.26rem"></mt-switch>
            </div>
            <p class="item-middle">8月9日</p>
            <p class="item-bottom">检查血压</p>
        </div>
        <div class="view-item">
            <div class="item-left">复诊</div>
            <div class="item-top">
                <div class="item-date">10:00</div>
                <mt-switch style="margin-right:.26rem"></mt-switch>
            </div>
            <p class="item-middle">8月9日</p>
            <p class="item-bottom">检查血压</p>
        </div>
        <div class="view-item">
            <div class="item-left">复诊</div>
            <div class="item-top">
                <div class="item-date">10:00</div>
                <mt-switch style="margin-right:.26rem"></mt-switch>
            </div>
            <p class="item-middle">8月9日</p>
            <p class="item-bottom">检查血压</p>
        </div>
        <div class="enter" @click="go('./visit/add')"><span class="enter-teg">+</span>新增时间提醒</div>
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
    padding-bottom:1.1rem;
}
.top{
    width: 100%;
    height: .92rem;
    text-align: center;
    line-height: .92rem;
    font-size: .28rem;
    color: #4D4D4D
}
.view-item{
    position: relative;
    width: 6.89rem;
    height: 2.18rem;
    margin: 0 auto .2rem auto;
    padding-left: 1.54rem;
    box-sizing: border-box;
    background: #fff;
    .item-left{
        position: absolute;
        left: 0;
        top: .26rem;
        width: .93rem;
        height: .54rem;
        text-align: center;
        line-height: .54rem;
        background:#5baa75;
        color: #fff;
        border-radius: 0 .5rem .5rem 0;
    }
    .item-top{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height:.96rem;
        align-items: center;
        padding-top: .26rem;
        .item-date{ 
            font-size: .5rem;
            font-weight: 600;
            color: #f29647;
        }
    }
    .item-middle{
        font-size: .26rem;
        color: #6a6a6a;
        line-height: .37rem;
    }
    .item-bottom{
        margin-top: .22rem;
        font-size: .32rem;
        color: #6a6a6a;
        line-height: .45rem;
    }
}
.enter-teg{
    font-size: .3rem;
    margin-right: .2rem;
}
</style>
