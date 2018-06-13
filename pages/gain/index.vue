<template>
    <div class="page">
        <DateBox ref="date"></DateBox>
        <div class="prompt">
            <div class="sugar"></div><span class="prompt-text">当前日期</span>
            <div class="square"></div><span class="prompt-text">已被预约</span>
            <div class="square-two"></div><span class="prompt-text">预约日期</span>
        </div>
        <div class="title" v-if="$store.state.isApp == '0'">
            <div class="sugar bobo"></div>
            <span class="title-text">今日剩余<span class="coco"> {{bed}} </span>张空床位可预约</span>
        </div>
        <div class="btn" @click="showNote" v-if="$store.state.isApp == '0'">立即预约</div>
        <div class="isApp" v-if="$store.state.isApp == '1'">
            <div class="isApp-squre"></div>
            <div class="isApp-teg">是否开启<span>“预约到时提醒”</span></div>
            <mt-switch class="isApp-switch" v-model="isApp"></mt-switch>
        </div>
        <div class="mask" v-if="noteShow">
            <div class="noteBox">
                <div class="note-title">请输入备注</div>
                <div class="noteTop">
                    <div class="piece"></div>
                    <div class="time" v-if="$refs.date.chooseDate[0]">{{$refs.date.chooseDate[0].time}}<span v-if="$refs.date.chooseDate[1]">与{{$refs.date.chooseDate[1].time}}</span></div>
                </div>
                <textarea class="tegBox" v-model="remark" placeholder="请输入备注"></textarea>
                <div class="noteBtn">
                    <div class="note-carry" @click="noteShow = false">取消</div>
                    <div class="note-enter" @click="postApp">确认</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { appointment,isHouse,remind } from '../../api/gain'
import DateBox from '../../components/demo'
export default {
    layout:'main',
    data(){
        return {
            noteShow:false,
            remark:'',//备注
            dateTime:'',
            bed:0,//当天的床位
            isApp:true,//床位是否已经预约,默认开启
        }
    },
    watch:{
        isApp(v,n){
            console.log(v);
            this.putRemind(v);
        }
    },
    created(){
        
    },
    mounted(){
        if(!this.$store.opend){
            this.$router.replace("./login")
            return;
        }else{
            // this.network().isHouse()
        }   
    },
    methods:{
        showNote(){
            if(this.$refs.date.chooseDate.length<1){
                this.$toast("请选择日期");
                return;
            }else{
                this.noteShow = true
            }
        },
        putTodayBed(res){
            //更新当天的床位
            this.bed = res;
        },
        async postApp(){
            var data = [];
            for( var i=0;i<this.$refs.date.chooseDate.length;i++ ){
                var obj = {
                    "isApp": 1,
                    "patientUuid":this.$store.state.patientUuid,
                    "remark": this.remark,
                    "uuid":this.$refs.date.chooseDate[i].uuid
                }
                data.push(obj)
            }
            console.log(data)
            // let res = await appointment(data);
            // if(res.status == 200){
            //     console.log(res.data);
            //记得执行remind（1）！！！！！！！！！！！！！！！！！
            // }
            this.noteShow = false;
        },
        putRemind(res){
            if(res){
                console.log("我开启了提醒服务")
                this.network().remind(1)
            }else{
                console.log("我关闭了提醒服务")
                this.network().remind(0)
            }
        },
        network(){
            let self = this;
            return {
                async isHouse(){
                    let res = await isHouse();
                    console.log("执行？")
                    if(res.status == 200){
                        console.log("获取是否有预约过床位",res.data);
                        self.$store.commit('setIsApp',res.data.code);
                    }
                },
                async remind(isHouseRemind){
                    var data = {
                        "isHouseRemind": isHouseRemind,
                        "uuid": "",
                    }
                    let res = await remind(data);
                    if(res.status == 200){
                        console.log(res.data)
                    }
                }
            }
        }
    },
    components:{
        DateBox,
    }
}
</script>

<style lang="scss" scoped>
.coco{
    color:#F29647!important;
}
.bobo{
    background: #F29647!important;
}
.sugar{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #FFE6D1;
}
.prompt{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.96rem;
    .prompt-text{
        margin-left: 0.2rem;
        font-size:.26rem;
        color:#7F8FA4;
        font-family:PingFangSC-Regular;
    }
    .square{
        margin-left: 0.44rem;
        width: 0.26rem;
        height: 0.26rem;
        border-radius: 0.06rem;
        background: #D3D3D3;
    }
    .square-two{
        margin-left: 0.44rem;
        width: 0.26rem;
        height: 0.26rem;
        border-radius: 0.06rem;
        background: #F29647;
    }
}
.title{
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.98rem;
    background: #fff;
    padding-left: 0.3rem;
    .title-text{
        margin-left: 0.22rem;
        font-size: 0.26rem;
        color:#8b8d8c;
    }
}
.btn{
    margin-top: 0.2rem;
    width: 100%;
    height: 1.1rem;
    background: #f29647;
    text-align: center;
    line-height: 1.1rem;
    color: #fff;
    font-size: 0.3rem;
}
.noteBox{
    width: 5.6rem;
    min-height: 4.68rem;
    background: #fff;
    border-radius: .08rem;
    padding-top: .25rem;
    box-sizing: border-box;
    .note-title{
        display: block;
        width: 100%;
        text-align: center;
        font-size: .28rem;
        line-height: .4rem;
        color: #6a6a6a;
        font-weight: 500;
    }
    .noteTop{
        width: 100%;
        height: .44rem;
        margin-top: .22rem;
        .piece{
            float: left;
            width: .1rem;
            height: .44rem;
            background: #f29647;
        }
        .time{
            float: left;
            margin-left: .27rem;
            font-size: .28rem;
            line-height: .44rem;
        }
    }
    .tegBox{
        display: block;
        width: 4.83rem;
        margin: .22rem auto .41rem auto;
        height: 1.75rem;
        padding: .14rem .21rem;
        box-sizing: border-box;
        background: #f3f3f3;    
        font-size: .28rem;
        line-height: .4rem;
    }
    .noteBtn{
        width: 100%;
        height: 1.01rem;
        border-top: solid 0.01rem #e5e5e5;
        .note-carry{
            float: left;
            width: 50%;
            height: 1rem;
            border-right: solid 0.01rem #e5e5e5;
            box-sizing: border-box;
            text-align: center;
            line-height: 1rem;
            color: #000000;
            font-size: .36rem;
            font-weight: 600;
        }
        .note-enter{
            float: left;
            width: 50%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            color: #F5A623;
            font-size: .36rem;
            font-weight: 600;
        }
    }
}
.isApp{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: .98rem;
    background: #fff;
    .isApp-squre{
        width: .16rem;
        height: .16rem;
        background: #F29647;
        border-radius: 50%;
        margin-left: .29rem;
        margin-right: .23rem;
    }
    .isApp-teg{
        flex: 1;
        text-align: left;
        font-size: .26rem;
        color: #8b8d8c;
        span{
            color: #F29647;
        }
    }
    .isApp-switch{
        margin-right: .65rem;
    }
}
</style>
