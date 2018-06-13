<template>
    <div class="page">
        <img class="mine-top" src="../../../assets/images/pic_banner3.png" />
        <div class="personal-box">
            <div class="personal-item">
                <img class="item-icon" src="../../../assets/images/ic_name.png" />
                <span class="item-title">姓名</span>
                <span class="item-name">李大鹏</span>
            </div>
            <div class="personal-item">
                <img class="item-icon" src="../../../assets/images/ic_sex.png" />
                <span class="item-title">性别</span>
                <span class="item-name">男</span>
            </div>
            <div class="personal-item">
                <img class="item-icon" src="../../../assets/images/ic_weight.png" />
                <span class="item-title">体重</span>
                <select class="item-name" v-model="weight">
                    <option v-for="(item,index) in wList" :key="index" @click="setWeight(item)">{{item}}</option>
                </select>
                <span class="item-unit">kg</span>
                <!-- <span class="item-right">kg<img src="../../../assets/images/right.png" /></span> -->
            </div>
            <div class="personal-item">
                <img class="item-icon" src="../../../assets/images/ic_stature.png" />
                <span class="item-title">身高</span>
                <select class="item-name" v-model="height">
                    <option v-for="(item,index) in hList" :key="index" @click="setHeight(item)">{{item}}</option>
                </select>
                <span class="item-unit">cm</span>
            </div>
        </div>
        <div class="record">    
            <div class="square"></div>
            <p>历史记录</p>
            <div class="timeline">
                <TimeAxis :list='list'>
                    <template slot="content" slot-scope="scope">
                        <div class="axis-template">
                            <p class="axis-time">{{scope.row.time}}</p>
                            <p class="axis-desc">{{scope.row.description}}</p>
                        </div>
                    </template>
                </TimeAxis>
            </div>
        </div>
        <div class="enter" @click="putInfo">更新</div>
        <!-- 以下是脱离文本流部分 -->
    </div>
</template>

<script>
import TimeAxis from '../../../components/TimeAxis'
import { Personal } from '../../../api/mine'
export default {
    data(){
        return {
            list:[
                {
                    time:'2018.03.29',
                    description:'体重30kg、身高150cm',
                },
                {
                    time:'2018.03.29',
                    description:'体重30kg、身高150cm',
                },
                {
                    time:'2018.03.29',
                    description:'体重30kg、身高150cm',
                },{
                    time:'2018.03.29',
                    description:'体重30kg、身高150cm',
                }
            ],
            wList:[],
            hList:[],
            weight:'请选择您的体重',//体重信息
            height:'请选择您的身高',//身高信息
        }
    },
    created(){
        for(var i=40;i<=190;i++){
            this.wList.push(i)
        }
        console.log(this.wList)
        for(var j=3;j<=200;j++){
            this.hList.push(j)
        }
    },
    components:{
        TimeAxis,
    },
    mounted(){
        this.network().Personal();
    },
    methods:{
        putInfo(){
            if(!this.vForm()){
                return;
            }
            var data = {
                "height": this.height,
                "patientUuid": "不用填",
                "weight": this.weight
            }
            console.log("data",data)
        },
        vForm(){
            console.log(this.weight)
            if(!this.weight){
                this.$toast("体重不能为空~")
                return false;
            }
            if(!this.height){
                this.$toast("身高不能为空~")
                return false;
            } 
            return true;
        },
        setWeight(res){
            this.weight = res;
        },
        setHeight(res){
            this.height = res;
        },
        network(){
            let self = this;
            return {
                async Personal(){
                    let res = await Personal();
                    if(res.status == 200){
                        console.log(res.data)
                        // 对个人信息 进行归类
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.personal-box{
    width: 100%;
    height: 3.81rem;
    padding: 0 .4rem;
    box-sizing: border-box;
    background: #fff;
    margin-top: -0.2rem;
    .personal-item{
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 0.28rem;
        color: #333;
        height: 0.9rem;
        border-bottom: solid 0.01rem #D7D7D7; 
        .item-icon{
            margin-left: 0.04rem;
            width: .42rem;
            height: .42rem;
        }
        .item-title{
            margin-left: 0.22rem;
        }
        .item-name{
            flex: 1;
            margin-left: .63rem;
            margin-right: .15rem;
            font-size: .28rem;
            color: #6a6a6a;
        }
        .item-unit{
            position: absolute;
            top: .24rem;
            right: .24rem;
            width: .6rem;
            height: .4rem;
            text-align: left;
            font-size: .28rem;
            line-height: .4rem;
            color:#bfbfbf;
        }
    }
}
.record{
    position: relative;
    margin-top: .2rem;
    width: 100%;
    padding: .26rem .4rem 0 .4rem;
    background: #fff;
    box-sizing: border-box;
    .square{
        //warn! 如果要对方块糖的样式做全局，那么必须保证他的父元素含有 相对定位
        position: absolute;
        width: .11rem;
        height: .4rem;
        background: #f29647;
        left: 0;
        top: .29rem;
    }
    p{
        height: .4rem;
        line-height: .4rem;
        font-size: .3rem;
        color: #333;
        font-weight: 500;
    }
    .timeline{
        width: 100%;
        padding: .4rem 0;
        box-sizing: border-box;
        background:#fff;
        .axis-template{
            margin-top: -.12rem;
            .axis-time{
                font-size: .26rem;
                color: #8B8D8C;
                line-height: .37rem;
            }
            .axis-desc{
                color: #4C4C4C;
                font-size: .28rem;
                margin-top: .19rem;
                line-height: .4rem;
            }
        }
    }
}
</style>
