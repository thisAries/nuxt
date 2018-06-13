<template>
    <div class="page">
        <!-- 功能菜单 2 体检 -->
        <div class="arow">
            <div class="square"></div>
            <span style="font-size:0.28rem;color:#F29647;font-family:PingFangSC-Medium;">治疗方案:<span style="color:#333">ALL2015方案</span></span>
        </div>
        <div class="arow" @click="push('/menu/record')">
            <div class="square"></div>
            <span>共23种体检选项</span>
            <span class="arow-go">
                <img class="arrow right-img" src="../../../assets/images/right.png" /><span class="right">点击修改</span>
            </span>
        </div>
        <MboxA></MboxA>
        <MboxB></MboxB>
        <MboxA></MboxA>
        <MboxB></MboxB>
        <MboxC></MboxC>
    </div>
</template>

<script>
import MboxA from '../../../components/Medical/MboxA'
import MboxB from '../../../components/Medical/MboxB'
import MboxC from '../../../components/Medical/MboxC'
export default {
    data(){
        return {

        }
    },
    components:{
        'MboxA':MboxA,
        'MboxB':MboxB,
        'MboxC':MboxC,
    },
    methods:{
        go(val){
            this.$router.push(val)
        },
        push(val){
            this.$router.replace(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.square{
    width: 0.12rem;
    height: 0.4rem;
    margin-right: .3rem;
    background: #f29647;
}
.arow{
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    margin-top: 0.2rem;
    padding-right: 0.4rem;
    box-sizing: border-box;
    background: #fff;
    .arow-go{
        flex: 1; 
    }
    .right{
        float:right;
        color:#BFBFBF;
    }
    .right-img{
        float: right;
        margin-left:0.2rem;  
    }
}
.project-item{
    width: 100%;
    height: 5.16rem;
    background: #fff;
    margin-top: 0.2rem;
    padding: .32rem .4rem;
    box-sizing: border-box;
    .item-title{
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        color: #333;
        font-size: .28rem;
    }
}
</style>