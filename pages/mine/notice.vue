<template>
    <div class="page">
        <div class="view-item" v-for="(item,key,index) in notice" :key="index">
            <div class="sugar"></div>
            <div class="item-time">{{item.time}}</div>
            <div class="item-desc">{{item.desc}}</div>
            <img class="item-img" @click="open()" 
                v-preview="item.img" 
                :src = "item.img"
                :key="key"
                :preview-title-enable="true"
                :preview-nav-enable="true" 
             />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            notice:[
                {
                    time:'2018.08.28 - 2018.09.28',
                    desc:'由北京儿童医院各科知名专家出诊的北由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京',
                    img:''
                },
                {
                    time:'2018.08.28 - 2018.09.28',
                    desc:'由北京儿童医院各科知名专家出诊的北由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京',
                    img:''
                },
                {
                    time:'2018.08.28 - 2018.09.28',
                    desc:'由北京儿童医院各科知名专家出诊的北由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京……由北京儿童医院各科知名专家出诊的北京',
                    img:''
                },
                {
                    time:'2018.08.28 - 2018.09.28',
                    desc:'由北京儿童医院各科知名专家出诊的北由北京儿童医院各科知名专家出诊的北京……',
                    img:'https://www.baidu.com/img/bd_logo1.png',
                }
            ],
            imgList:[]
        }
    },
    mounted(){

    },
    methods:{
        open(e){
           
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    padding-top: .2rem;
}
.view-item{
    position: relative;
    width: 6.9rem;
    min-height: 2.02rem;
    background: #fff;
    border-radius: .08rem;
    padding: .28rem .69rem;
    box-sizing: border-box;
    margin: 0 auto .2rem auto;
    .sugar{
        position: absolute;
        top: .4rem;
        left: .29rem;
        width: .14rem;
        height: .14rem;
        background: #f29647;
        border-radius: 50%;
    }
    .item-time{
        font-size: .26rem;
        color: #6a6a6a;
        line-height: .37rem;
        margin-bottom: .17rem;
    }
    .item-desc{
        font-size: .3rem;
        color: #6a6a6a;
        font-weight: 600;
        line-height: .42rem;
    }
    .item-img{
        width: 100%;
    }
}

</style>
