<template>
    <div class="MboxA">
        <div class="view">
            <div class="view-title">第一天腰穿</div>
            <div class="view-date"></div>
        </div>
        <div class="name">腰穿结果</div>
        <div class="tage">
            <textarea class="tage-inpt" :placeholder="teg"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            teg:"异常情况请注明具体情况，有无初学等额归属感is都很贵的时光好U盾上轨道上"
        }
    }
}
</script>

<style lang="scss" scoped>
.MboxA{
    margin-top: .2rem;
    width: 100%;
    min-height: 5.16rem;
    background: #fff;
    padding: .32rem;
    box-sizing: border-box;
    .view{
        display: flex;
        align-items: center;
        width: 100%;
        height: .72rem;
        .view-title{
            width: 1.8rem;
            height: .72rem;
            line-height: .72rem;
            font-size: .28rem;
            color: #333;
        }
        .view-date{
            flex: 1;
            height: 100%;
            padding: 0 .2rem;
            box-sizing: border-box;
            font-size: .26rem;
            color: #9B9B9B;
            line-height: .72rem;
            border: solid 0.01rem #dfe3e8;
            background: url("../../assets/images/ic_select.png") no-repeat 4.5rem center;
            background-size: .45rem .45rem;
        }
    }
    .name{
        width: 100%;
        height: .4rem;
        font-size: .28rem;
        color: #333;
        line-height: .4rem;
        text-align: left;
        margin: .36rem 0 .16rem 0;
    }
    .tage{
        width: 100%;
        height: 2.81rem;
        border: solid 0.01rem #DFE3E8;
        padding: .16rem .22rem;
        box-sizing: border-box;
        .tage-inpt{
            width: 100%;
            height:100%;
            border: none;
        }
    }
}
</style>
