<template>
    <div class="MboxB">
        <div class="crystal"></div>
        <div class="name">血常规（每周3~4次）</div>
        <div class="view-item">
            <div class="item-title">白细胞计数</div>
            <div class="item-box">
                <input type="text" placeholder="数量" />
            </div>
            <div class="item-unit">×109/L</div>
        </div>
        <div class="view-item">
            <div class="item-title">白细胞计数</div>
            <div class="item-box">
                <input type="text" placeholder="数量" />
            </div>
            <div class="item-unit">×109/L</div>
        </div>
        <div class="view-item">
            <div class="item-title">白细胞计数</div>
            <div class="item-box">
                <input type="text" placeholder="数量" />
            </div>
            <div class="item-unit">×109/L</div>
        </div>
        <div class="view-item">
            <div class="item-title">白细胞计数</div>
            <div class="item-box">
                <input type="text" placeholder="数量" />
            </div>
            <div class="item-unit">×109/L</div>
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
.MboxB{
    position: relative;
    width: 100%;
    min-height:4.1rem;
    background: #fff;
    margin-top: .2rem;
    padding: .38rem;
    box-sizing: border-box;
    .name{
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        color: #333;
        font-size: .28rem;
        text-align: left;
        margin-bottom: .07rem;
    }
    .view-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: .72rem;
        margin-top: .2rem;
        .item-title{
            width: 2.28rem;
            height: .72rem;
            line-height: .72rem;
            font-size: .28rem;
            color: #333;
            font-weight: 600;
        }
        .item-box{
            width: 3.4rem;
            height: .7rem;
            padding: 0 .24rem;
            box-sizing: border-box;
            border: solid 0.01rem #DFE3E8;
            input{
                width: 100%;
                height: 100%;
                border: none;
                font-size: .26rem;
                line-height: .7rem;
            }
        }
        .item-unit{
            flex: 1;
            height: .7rem;
            line-height: .7rem;
            font-size: .26rem;
            color: #9b9b9b;
            text-align: right;
        }
    }
}
</style>