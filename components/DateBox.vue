<template>
    <div class="DateBox">
        <div class="Date-top">
            <img class="top-img" src = "../assets/images/ic_next.png" />
            <span>{{year}}-{{moth}}月</span>
            <img src = "../assets/images/ic_next.png" />
        </div>
        <ul class="Date-middle">
            <li v-for="(item,key,index) in week" :key="index">{{item}}</li>
        </ul>
        <ul class="Date-arr">
            <li v-for="(item,key,index) in days" :key="index" :class="{today:item==today,}">{{item}}</li>
        </ul>

    </div>
</template>

<script>
export default {
    data(){
        return {
            week:["日","一","二","三","四","五","六"],
            days:[],//当前月的天数
            year:2018,
            moth:6,
            today:1,//今天
            oldDay:[],//过期时间
        }
    },
    created(){
        this.init();
    },
    mounted(){
        
    },
    methods:{
        init(){
            // 获取当前时间
            var d = new Date();
            this.moth = d.getMonth()+1;
            this.year = d.getFullYear();
            var day = d.getDate();
            this.today = day;
            var arr = [1,3,5,7,8,10,12];
            var arr2 = [4,6,9,11]
            for(var i=1;i<=arr;i++){
                this.moth == i;

            }
        },
    }
}
</script>

<style lang="scss" scoped>
.DateBox{
    width: 100%;
    height: 8.66rem;
    margin-top: 0.18rem;
    padding: 0 .51rem;
    box-sizing: border-box;
    background: #fff;
    .Date-top{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.14rem;
        img {
            width: .25rem;
            height: .25rem;
        }
        .top-img{
            transform: rotate(180deg);
        }
        span{
            flex: 1;
            text-align: center;
        }
    }
    .Date-middle{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 1.25rem; 
    }
    .Date-arr{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 5.8rem;
        li{
            width: .9rem;
            height: .9rem;
            background: #fff;
        }
        .today{
            // 当天
            background: #FFE6D1;
            border-radius: 50%;

        }
    }
}
</style>
