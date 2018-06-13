<template>
    <div class="page">
        <img class="mine-top" src="../../../assets/images/pic_banner3.png" />
        <div class="add-box">
            <div class="add-date" @click="openDate">
                <img src = "../../../assets/images/ic_date.png" />
                <span>日期</span>
                <div class="date-box">{{date}}</div>
            </div>
            <div class="add-date" @click="openTime">
                <img src = "../../../assets/images/ic_time.png" />
                <span>时间</span>
                <div class="date-box">{{time}}</div>
            </div>
        </div>
        <div class="chooseRemind" @click="maskShow = true">
            <span>选择提醒事项</span>
            <img src = "../../../assets/images/right.png" />
        </div>
        <div class="single">
            <div class="single-title">提醒事项</div>
            <div class="single-box">
                <div class="single-item" v-for="(item,key,index) in typeList" :key="index" v-if="item.status">{{item.name}}</div>
            </div>
        </div>
        <!-- 以下是mint-ui的弹起内容 -->
         <mt-datetime-picker
            ref="pickerDate"
            v-model="dateDate"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="new Date()"
            >
        </mt-datetime-picker>
        <mt-datetime-picker
            ref="pickerTime"
            v-model="timeData"
            type="time"
            >
        </mt-datetime-picker>

        <!-- 以下是脱离文档流内容 -->
        <div class="mask" v-if="maskShow" @click="maskShow = false">
            <!-- 对于一些dialog,我的看法是不封装组件，除非逻辑和样式都有极度的相似 . 所以我推荐css共享 -->
            <div class="dialog" @click="stop">
                <div class="dialog-title">请选择提醒事项</div>
                <div class="dialog-box">
                    <div class="box-item" v-for="(item,key,index) in typeList" :key="index" @click="chooseType(item.uuid,key)" :class="{active:item.status}">{{item.name}}</div>
                </div>
                <div class="dialog-btn" @click="maskShow = false">确定</div>
            </div>
        </div>
        <div class="enter">确定</div>        
    </div>
</template>

<script>
export default {
    data(){
        return {
            date:'2018/03/10',//placeholder的当前日期
            time:'11:00',//placeholder的当前时分
            maskShow:false,
            typeList:[{uuid:'1',name:'血常规',status:false},{uuid:'2',name:'生化全套',status:false},{uuid:'3',name:'粪常规',status:false},{uuid:'4',name:'降血试验',status:false},
            {uuid:'5',name:'体检免疫',status:false},{uuid:'6',name:'自身抗体',status:false},],//事项
            dateDate:'',//年月日数据
            timeData:'',//时分数据
        }
    },
    methods:{
        stop(){
            event.stopPropagation();
        },
        chooseType(uuid,key){
            // uuid 负责传数据
            // key 负责改变class
            this.typeList[key].status = !this.typeList[key].status;
        },
        openDate(){
            this.$refs.pickerDate.open();
        },
        openTime(){
            this.$refs.pickerTime.open();
        }
    }
}
</script>

<style lang="scss" scoped>
.active{
    // 凡是这个class都不允许设置全局
    color: #f29647!important;
    border-color:#f29647!important;
}
.add-box{
    width: 6.9rem;
    height: 2.4rem;
    margin: 0 auto;
    padding: .36rem .42rem;
    background: #fff;
    border-radius:.08rem;
    box-shadow:0px .02rem 0px rgba(169,169,169,0.25);
    .add-date{
        display: flex;
        align-items: center;
        width: 100%;
        height: .72rem;
        margin-bottom: .2rem;
        img{
            width: .45rem;
            height: .45rem;
        }
        span{
            font-size: .3rem;
            color: #6a6a6a;
            margin-left: .2rem;
            margin-right: .22rem;
        }   
    }
    .date-box{
        flex: 1;
        height: .72rem;
        line-height: .72rem;
        padding-left: .23rem;
        border: solid 0.01rem #DFE3E8; 
        background: url("../../../assets/images/ic_select.png") no-repeat;
        background-size: .45rem .45rem;
        background-position: right center;
    }
}
.chooseRemind{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6.9rem;
    margin: .2rem auto 0 auto;
    height: .9rem;
    padding: 0 .36rem;
    background: #fff;
    border-radius: .08rem; 
    box-shadow:0px 0.02rem .1rem 0px rgba(169,169,169,0.25);
    span{
        font-size: .28rem;
        color: #333;
        font-weight: 500;
    }
    img{
        width: 0.08rem;
        height: .16rem;
    }
}
.dialog{
    position: relative;
    width: 5.6rem;
    min-height: 6.21rem;
    background: #fff;
    border-radius: .08rem;
    .dialog-title{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        font-size: .32rem;
        line-height: .98rem;
        color: #141414;
        text-align:center;
        border-bottom: solid 0.01rem #e5e5e5;
    }
    .dialog-box{
        display: flex;
        flex-wrap: wrap;  
        width: 100%;
        padding: .3rem .3rem;
        .box-item{
            min-width: 1.5rem;
            height: .58rem;
            margin: .15rem .08rem;
            text-align: center;
            line-height: .58rem;
            background: #f6f6f6;
            border-radius: .03rem;
            border: solid .02rem #F6F6F6;
            box-sizing: border-box;
            color: #999999;
            font-size: .28rem;
        }
    }
    .dialog-btn{
        position: absolute;
        bottom: .4rem;
        left: .39rem;
        width: 85.7%;
        height: .9rem;
        background: #f29647;
        border-radius: .08rem;
        line-height: .9rem;
        text-align: center;
        color: #fff;
        font-size: .32rem;
    }
}
.single{
    width: 100%;
    min-height: 2.11rem;
    background: #fff;
    margin-top: .3rem;
    .single-title{
        width: 100%;
        height: .9rem;
        padding-left: .7rem;
        font-size: .32rem;
        font-weight: 600;
        color:#333;
        line-height: .9rem;
        border-bottom: solid 0.02rem #E5E5E5;
    }
    .single-box{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        min-height: 1.18rem;
        .single-item{
            width: 33.3%;
            height: 1.18rem;
            line-height: 1.18rem;
            text-align: center;
            font-size: .28rem;
            color:#666;
        }
    }
}
</style>