<template>
    <div class="page">
        <!-- 功能菜单 第3个功能 体检 -->
        <div class="arow">
            <div class="square"></div>
            <span style="font-size:0.28rem;color:#F29647;font-family:PingFangSC-Medium;">治疗方案:<span style="color:#333">ALL2015方案</span></span>
        </div>
        <div class="que-item" v-for="(item,key,index) in queData" v-bind:key="index">
            <p>{{key + 1}}.这是问题{{key + 1}}?</p>
            <div class="que-btn">
                <div class="btn-child" :class="{btnActive:queArr[key]=='0'}" @click="chooseNo(key)">无</div>
                <div class="btn-child" :class="{btnActive:(queArr[key]=='1')}" @click="chooseHas(key)">是</div>
            </div>
            <div class="que-inpt"><input type="text" placeholder="请简述情况" /></div>
        </div>
        <div class="post">上传</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            queData:[1,2,3,4,5,6],
            queArr:[],
        }
    },
    methods:{
        chooseNo(key){
            this.queArr[key] = 0;
            console.log("----------------<>",this.queArr)
        },
        chooseHas(key){
            this.queArr[key] = 1;
            console.log(this.queArr)
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
}
.que-item{
    margin-top: 0.2rem;
    width: 100%;
    height: 2.97rem;
    padding: .23rem 0.5rem 0 .5rem;
    box-sizing: border-box;
    background: #fff;
    p{  
        margin-left:-0.1rem;
        height: .42rem;
        font-size: .3rem;
        color: #333;
    }
    .que-btn{
        margin-top: .26rem;
        width: 100%;
        .btn-child{
            float: left;
            margin-right: .26rem;
            width: 2.4rem;
            height: .72rem;
            font-size: .26rem;
            color:#F29647;
            line-height: .72rem;
            text-align: center;
            background: #fff;
            border:solid 0.01rem #D8D8D8;
            border-radius: 0.03rem;
            box-shadow:.02rem .02rem .02rem rgba(216,216,216,1);
        }
        .btnActive{
            color:#fff!important;
            background: linear-gradient(148.5deg,rgba(255,190,134,1),rgba(242,150,71,1))!important;
        }
    }
    .que-inpt{
        margin-top: 1.27rem;
        width: 100%;
        height: 0.84rem;
        border: solid 0.01rem #dfe3e8;
        input{
            width: 100%;
            height: 100%;
            padding: 0 0.15rem;
            box-sizing: border-box;
        }
    }
}
.post{
    width: 100%;
    height: 1.1rem;
    color: #fff;
    text-align: center;
    background: #F29647;
    line-height: 1.1rem;
}
</style>
