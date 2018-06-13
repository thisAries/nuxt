<template>
    <div class="DateBox">
        <div class="Date-top">
            <img class="top-img" src = "../assets/images/ic_next.png" @click="event().prevBtn()" />
            <span>{{year}}-{{month}}月</span>
            <img src = "../assets/images/ic_next.png" @click="event().nextBtn()"/>
        </div>
        <ul class="Date-middle">
            <li v-for="(item,key,index) in week" :key="index">{{item}}</li>
        </ul>
        <ul class="Date-arr">
            <li v-for="(item,key,index) in dateList" :key="index" 
            :class="{today:Date.parse(item.time)==today,oldDay:Date.parse(item.time) < today,isApp: Date.parse(applist[0].date) == Date.parse(item.time),chooseDay:item == chooseDate[0] || item == chooseDate[1],widthOut:item.isBeApp == '0'}"
            @click="choose(item)">{{item.date}}</li>
        </ul>
    </div>
</template>

<script>
import {list} from '../api/gain.js'
export default{
    data(){
        return {
          week:["日","一","二","三","四","五","六"],
          dateList:[],//存放天数
          month: new Date().getMonth() + 1,
          year:new Date().getFullYear(),
          today:'',
          today2:'',//当天时间
          chooseDate:[],//自选的天数
          applist:[],//已经选择的云端
          bedNum:0,
          app1:'',
        }
    },
    created(){
      if(!this.$store.opend){
        return;
      }else{
        this.network().list();
      }   
    },
    methods:{
        init(res){
            this.dateList = []
            var weekDate = [];
            var d = new Date();
            this.today = Date.parse(`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`);
            this.today2 = `${d.getFullYear()}-${this.getMonth(d.getMonth()+1)}-${d.getDate()} 00:00:00`
            console.log("this.today2",this.today2)
            var resList = [];
            var lastList = [];
            var mm = this.getMonth(this.month);
            for(var q = 0;q<res.length;q++){
              if(res[q].date == `${this.year}-${mm}`){
                resList = res[q].list;
                console.log(resList)
                // if(res[q].date == `${d.getFullYear()}-${d.getMonth()}`){
                //     // weekDate = resList.concat(res[q+1].list)
                // } 
              }
              if(res[q].date == `${this.year}-${mm-1}`){
                lastList = res[q].list;
              }
            }//识别那些是过期的时间 那些是可以用的时间         
            // if(weekDate.length > 1){
            //   for(var t=0;t<14;t++){
            //       console.log("====",weekDate)
            //       var toDate = `${d.getFullYear()}-${this.getMonth(d.getMonth()+1)}-${d.getDate()}`
            //       if(weekDate[t].date  == toDate){
            //         this.$store.commit("setIsApp",weekDate[t].isApp) 
            //       }
            //   }//处理14天内的isApp
            // }

            
            let days = new Date(this.year,this.month,0).getDate(); //当月天数
            let lastDays = new Date(this.year,this.month-1,0).getDate();//上个月的天数
            let FirstDate = new Date(this.year,this.month-1,1);//第一天的数据
            let week = FirstDate.getDay();
            for(let j = 0;j< week; j++){
              // 补充oldDay 上个月的   
              if(lastList.length>0){
                this.dateList.push({
                  date:lastDays -week + j +1,
                  uuid:lastList[lastDays -week + j].uuid,
                  noUseBed:lastList[lastDays -week + j].noUseBed,
                  isBeApp:lastList[lastDays -week + j].isBeApp,
                  time:`${this.year}/${this.month-1}/${lastDays -week + j +1}`
                })
              }else{
                this.dateList.push({
                  date:lastDays -week + j +1,
                  time:`${this.year}/${this.month-1}/${lastDays -week + j +1}`
                })
              }         
            }
            for(let i = 0; i<days;i++){
              if(resList.length>0 && this.month < d.getMonth() + 3){
                this.dateList.push({
                  date:1+i,
                  uuid:resList[i].uuid,
                  noUseBed:resList[i].noUseBed,
                  isBeApp:resList[i].isBeApp,
                  time:`${this.year}/${this.month}/${1+i}`
                })
              }else{
                this.dateList.push({
                  date:1+i,
                  time:`${this.year}/${this.month}/${1+i}`
                })
              }      
            }
            let oldDays =  - this.dateList.length%7;
            if(oldDays !==7 ){
              for(let k = 0;k<oldDays;k++){
                this.dateList.push("")
              }
            }
            console.log("处理完成后的时间",this.dateList)
        },
        getMonth(res){
          if(res<10){
            return "0"+res;
          }
        },
        choose(res){
            if(this.$store.state.isApp == '1'){
              this.$toast("您已预约过床位了~")
              return;
            }//这里控制已预约的return
            //if()//如果是两周之后 那么就提示 只能预约两周内的 并且return
            console.log(res);
            if(Date.parse(res.time)<this.today){
              console.log("点击了过去的时间")
              return;
            }
            if(Date.parse(res.time)>this.today + 1209600000){
              console.log("点击了超过2周的时间")
              this.$toast("只能提前预约两周内~")
              return;
            }
            if(res.noUseBed == '0'){
              this.$toast("很抱歉已无床位可预约~")
              return;
            }
            if(this.chooseDate.indexOf(res) == -1){
              if(this.chooseDate.length<2){
                this.chooseDate.push(res); 
              }else{
                this.$toast("最多可以选两天哦~")
              }  
            }else{
              this.chooseDate.splice(this.chooseDate.indexOf(res),1);
            }
        },
        isApp(res){
            // 对当天是否预约做判断
            if(res == '1'){
              // 表示预约过了
            }
        },
        network(){
          let self = this;
          return {
            async list(){
              let res = await list();
              if(res.status == 200){
                console.log(res.data)
                self.init(res.data.list);
                self.applist = res.data.applist;
                self.app1 = res.data.applist[0].date;
                console.log(self.app1)
                console.log(self.applist,"这是扎心的节奏")
                self.$parent.putTodayBed(res.data.noUseBed);
              }
            }
          }
        },
        event(){
          let self = this;
          return {
            prevBtn(){
              if(self.month == 1) {
                self.month = 12
                self.year -= 1
                self.network().list()
              } else {
                self.month -= 1
                self.network().list()
              }
            },
            nextBtn(){
              if(self.month == 12) {
                self.month = 1
                self.year += 1
                self.network().list()
              } else {
                self.month += 1
                self.network().list()
              }
            }
          }
        }
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
        font-family:AppleSystemUIFont;
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
        justify-content: flex-start;
        width: 100%;
        height: 1.25rem; 
        li{
          font-family:AppleSystemUIFont;
          margin: 0 auto;
          width: .88rem;
          height: .88rem;
          text-align: center;
          line-height: .9rem;
        }
    }
    .Date-arr{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        height: 5.8rem;
        li{
            font-family:AppleSystemUIFont;
            width: .91rem;
            height: .91rem;
            margin-right: .01rem;
            background: #fff;
            text-align: center;
            line-height: .91rem;
            font-size: .3rem;
        }
        .today{
            // 当天
            background: #FFE6D1;
            border-radius: 50%;
        }
        .oldDay{
          // 过期时间 样式权重最高
            background: #fff!important;
            color: #aeaeae!important;
        }
        .widthOut{
          background: #D3D3D3;
          border-radius: .06rem;
          color: #fff;
        }
        .chooseDay{
          background: #F29647;
          color: #fff;
          border-radius: 0.06rem;
        }
        .isApp{//用户之前选择的预约时间
          background: #F29647;
          color: #fff;
          border-radius: 0.06rem;//但是过期的时间仍然是权重最高的
        }
    }
}
</style>