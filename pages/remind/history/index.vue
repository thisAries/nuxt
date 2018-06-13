<template>
    <div class="page">
        <!--  -->
        <div class="top">
            <div class="top-title">选择日期</div>
            <div class="top-date" @click="chooseDate">{{chooseDay}}<img src = "../../../assets/images/right.png" /></div>
        </div>
        <div class="view-item">
            <div class="item-title">2018-03-26</div>
            <Remind :switchFlag="false" />
            <Remind :switchFlag="false" />
            <Remind :switchFlag="false" />
            <Remind :switchFlag="false" />
            <Remind :switchFlag="false" />
        </div>
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
        <div class="mask" v-if="dialogShow" @click="dialogShow = false">
            <div class="dialog" v-if="dialogShow" @click="stop">
                <div class="dialog-title">
                    <img src = "../../../assets/images/ic_title_left.png" />
                    <span>服药提醒</span>
                    <img src = "../../../assets/images/ic_title_right.png" />
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <div class="dialog-item">
                    <span>甘草酸二铵胶囊</span><span>2片</span>
                </div>
                <img class="close" src = "../../../assets/images/ic_close3.png" @click="dialogShow = false" />
            </div>
        </div>
    </div>
</template>

<script>
import Remind from '../../../components/Remind'
export default {
    data(){
        return {
            pickerVisible:'',//时间选择
            chooseDay:'',//被选择的时间
            dialogShow:false,//dialog的show
        }
    },
    components:{
        "Remind" : Remind,
    },
    mounted(){
        var d = new Date();
        console.log(d)
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
        stop(){
            event.stopPropagation();
        },
        showDialog(){//展示mask 并将数据传给
            this.dialogShow = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.top{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: .8rem;
    background: #fff;
    .top-title{
        margin-left: .33rem;
        color:#f29647;
        font-size: .3rem;
    }
    .top-date{
        margin-left: 2rem;
        font-size: .3rem;
        color: #4a4a4a;
        margin-right: .63rem;
        img{
            margin-left: .35rem;
            margin-top: -.09rem;
            width: .18rem;
            height: .32rem;
        }
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
.dialog{
    position: relative;
    width: 5.6rem;
    min-height: 4.9rem;
    background: #fff;
    padding-bottom:.33rem;
    border-radius: 0.08rem;
    .dialog-title{
        margin-top: .28rem;
        margin-bottom: .1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: .42rem;
        img{
            width: .32rem;
            height: .32rem;
        }
        span{
            margin: 0 .33rem;
            font-size: .3rem;
            color: #f29647;
        }
    }
    .dialog-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: .4rem;
        padding: 0 .92rem;
        margin-top: .33rem;
        box-sizing: border-box;
        span{
            font-size: .28rem;
            color: #666;
            font-weight: 400;
        }
    } 
    .close{
        position:absolute;
        top: .38rem;
        right: .43rem;
        width: .25rem;
        height: .25rem;
    }  
}
</style>
