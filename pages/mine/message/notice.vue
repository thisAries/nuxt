<template>
    <div class="page">
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <div class="item-box">
                <div class="item-title">中性粒绝对计数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数中性数中性数中性数中性数中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <div class="item-box">
                <div class="item-title">中性粒绝对计数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数中性数中性数中性数中性数中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
        </div>
        <div class="view-item">
            <div class="view-icon"></div>
            <p class="date">8月9日 09：00</p>
            <div class="item-box">
                <div class="item-title">中性粒绝对计数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
            </div>
            <div class="item-box">
                <div class="item-title">中性数中性数中性数中性数中性数中性数:</div>     
                <div class="item-teg">15x1012/L</div>                 
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

    }
}
</script>

<style lang="scss" scoped>
.view-item{
    position: relative;
    width: 6.9rem;
    min-height: 2.02rem;
    margin: .2rem auto .2rem auto;
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
    .item-box{
        width: 100%;
        margin-top: .2rem;
        font-size: .28rem;
        min-height: .4rem;
        .item-title{
            display: inline-block;
            vertical-align: top;
            width: 2.24rem;
            color: #F75561;
        }
        .item-teg{
            width: 3.5rem;
            margin-left: .2rem;
            display: inline-block;
            color: #F75561;
        }
    }
}
</style>
