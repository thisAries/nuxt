<template>
    <div class="page">
        <!--  -->
        <TopEditor ref="topEditor"></TopEditor>
        <div class="top">
            <div class="top-title">选择日期</div>
            <div class="top-date" @click="chooseDate">{{chooseDay}}</div>
            <img src = "../../../assets/images/right.png" />
        </div>
        <div class="view-item">
            <div class="item-title">2018-03-26</div>
            <Remind :anit="anit" :switchFlag="true" v-for="(item,index) in remindList" :key="index"/>
        </div>
        <!-- 脱离文档流部分 -->
        <mt-datetime-picker
            ref="picker"
            v-model="pickerVisible"
            type="date"
            @confirm="handleConfirm"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="new Date()"
            >
        </mt-datetime-picker>
        <div class=""></div>
    </div>
</template>

<script>
import TopEditor from '../../../components/TopEditor'
import Remind from '../../../components/Remind'
export default {
    data(){
        return {
            pickerVisible:'',//时间选择
            chooseDay:'',//被选择的时间
            anit:false,
            remindList:['1','2','3'],
        }
    },
    components:{
        "Remind" : Remind,
        TopEditor,
    },
    watch:{
 
    },
    mounted(){
        var that = this;
        this.$refs.topEditor.$on('topEditor',function(val){
            console.log("监听",val)
            that.anit = val;
            console.log(that.anit,"********");
        })
        console.log(this)
        var d = new Date();
        console.log(this.$route)
        this.chooseDay = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
        // this.pickerVisible = d.getFullYear() + '年' + d.getMonth() + '月' + d.getDate() + '日'
    },
    methods:{
        chooseDate(){
            this.$refs.picker.open();
        },
        handleConfirm(val){
            console.log("-->",val)
            this.chooseDay = val.getFullYear() + '年' + (val.getMonth() + 1) + '月' + val.getDate() + '日';
        },
        showDellog(){
            console.log("触发删除")
        },
    }
}
</script>

<style lang="scss" scoped>
.top{
    display: flex;
    align-items: center;
    width: 100%;
    height: .8rem;
    background: #fff;
    .top-title{
        margin-left: .33rem;
        color:#f29647;
        font-size: .3rem;
    }
    .top-date{
        margin-left: 2.5rem;
        font-size: .3rem;
        color: #4a4a4a;
    }
    img{
        margin-left: .35rem;
        width: .18rem;
        height: .32rem;
    }
}
.view-item{
    width: 100%;
    padding: 0 .3rem;
    box-sizing: border-box;
    .item-title{
        width: 100%;
        height: .9rem;
        font-size: .28rem;
        line-height: .9rem;
        color: #aeaeae;
    }
}

</style>
