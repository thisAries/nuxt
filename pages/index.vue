<template>
    <div class="page">
    <!-- 轮播图 -->
      <div class="banner">  
        <mt-swipe :show-indicators="false" @change="handleChange">
          <mt-swipe-item class="swiper" v-for="(item,key,index) in banner" v-bind:key="index" @click="go(item.url)">
            <img class="swiper-img" :src="item.image" />
          </mt-swipe-item>
        </mt-swipe> 
        <ul class="banner-bot">
          <li v-for="(item, key ,index) in banner" v-bind:key="index" :class="{IndexActive:Index==key}"></li>
        </ul>
      </div>
 
    <!-- 温馨提示 -->
      <div class="marquee"> 
        <div class="marquee-left">温馨提示:</div>
        <div class="marquee-right">
          <ul class="marquee-box" id="marquee" ref="marquee" :class="{martion:martion}" :style="{top:-1.02*timerIndex + 'rem'}">
            <li v-for="(item,key,index) in marqueeData" :key="index" @click="go(item.url)">{{item.content}}</li>
          </ul>
        </div>
      </div>
      <div class="boss">
        <!-- 功能板块 -->
        <div class="boss-box">
          <div class="boss-item" @click="go('/menu/form')">
            <img class="boss-img" src="../assets/images/ic_home_among.png" />
            <span>化验单记录</span>
          </div>
          <div class="boss-item" @click="go('/menu/record')"> 
            <img class="boss-img" src="../assets/images/ic_home_machine.png" />
            <span>化验单记录</span>
          </div>
          <div class="boss-item" @click="go('/menu/medical')">
            <img class="boss-img" src="../assets/images/ic_home_medical.png" />
            <span>自我体检记录</span>
          </div>
        </div>
      </div>
      
      <div class="tweets">
        <div class="tweets-title">
          <img src="../assets/images/ic_title_left.png" />
          <span>每日推文</span>
          <img src="../assets/images/ic_title_right.png" />
        </div>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="tweet-item" v-for="(item,key,index) in tweet" :key="index" @click="go('./menu/details')">
            <div class="t-title">{{item.title}}</div>
            <div class="t-desc">{{item.content}}</div>
          </div>
        </mt-loadmore>
        <!-- 每日推文 -->
      </div>
  </div>
</template>
<script>
import { slideshow,sysreply,daytweet } from '../api/home'
export default {
  layout: "main",
  data() {
    return {
      banner: [],
      Index: "", //下标值
      
      //mint ui swiper配置
      marqueeData:[],//滚动条内容
      martion:false,


      timer:'',//
      timerIndex:0,
      tweet:[],//每日推文数据存放
      tweetTotal:1,//页码存放
      // allLoaded
      allLoaded:false,

      // 
    };
  },
  watch:{
    $route:function(v,n){
      clearInterval(this.timer)
    } 
  },
  mounted(){
    var that = this;
    console.log("mount")
    clearInterval(this.tiemr)
    // this.network().getBanner();     //以后恢复
    this.network().getSysreply(10,1);
    this.network().getDaytweet(10,1);
  },
  methods: {
    handleChange(val) {
      this.Index = val;
    },
    go(val){
      this.$router.push(val)
    },
    cart(){
      var that = this;
      this.timer = setInterval(()=>{
        if(that.timerIndex == '0'){
          that.martion = false;
        }else{
          that.martion = true;
        }
        if(that.timerIndex < that.marqueeData.length-1){
          that.timerIndex = that.timerIndex + 1
        }else if(that.timerIndex = that.marqueeData.length-1){       
          that.timerIndex = 0;
        }
      },3000)
    },  
    loadBottom(){
      // 下拉加载更多
      console.log("加载")
    },
    network(){
      let self = this;
      return {
        async getBanner(){
          let res = await slideshow();
          if(res.status == 200){
            console.log(res.data);
            self.banner = res.data;
          }
        },//轮播
        async getSysreply(limit,offset){
          let res = await sysreply(limit,offset);
          if(res.status == 200){
            console.log(res.data)
            res.data.list = res.data.list.concat(res.data.list[0]);
            self.marqueeData = res.data.list;
            self.cart();
          }
        },//公告
        async getDaytweet(limit,offset){
          let res = await daytweet(limit,offset);
          if(res.status == 200){
            console.log(res.data)
            self.tweetTotal = res.data.total;
            self.tweet = self.tweet.concat(res.data.list);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
// banner
.banner {
  width: 100%;
  height: 4rem;
  background: #fff;
  padding: 0.34rem 0 0 0;
  box-sizing: border-box;
  .swiper {
    text-align: center;
    width: 100%;
    height: 3.3rem;
    .swiper-img{
      width: 90%;
    }
  }
  .banner-bot {
    display: flex;
    width: 100%;
    height: 0.06rem;
    justify-content: center;
    margin-top: -0.2rem;
    li {
      width: 0.45rem;
      height: 0.06rem;
      margin: 0 0.15rem;
      background: rgba(209, 209, 209, 1);
    }
    .IndexActive {
      background: rgba(242, 150, 71, 1);
    }
  }
}
// marquee
.marquee{
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.02rem;
  padding: 0 .34rem;
  box-sizing: border-box;
  background: #fff;
  .marquee-left{
    height: 1.02rem;
    margin-right:.2rem;
    line-height: 1.02rem;
    font-size: .26rem;
    color:#f99354;
  }
  .marquee-right{
    position: relative;
    flex: 1;
    height: 1.02rem;
    overflow: hidden;
    .marquee-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: all 3s ease 0s;
      li{
        width: 100%;
        height: 1.02rem;
        line-height: 1.02rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
// boss
.boss{
  width: 100%;
  height: 2.06rem;
  padding: 0.2rem 0.29rem;
  box-sizing: border-box;
  background: #F6F6F6;
  .boss-box{
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow:0px 2px 0px rgba(242,150,71,0.25);
    .boss-item{
      flex: 1;
      height: 100%;
      text-align: center;
      .boss-img{
        display: block;
        width: 0.75rem;
        height: 0.75rem;
        margin: 0.25rem auto 0.2rem auto;
      }
      span{
        font-size: 0.24rem;
        color:#565656;
        line-height: .33rem;
        font-family:PingFangSC-Regular;
      }
    }
  }
}
//tweets
.tweets{
  width: 100%;
  height: 100%;
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
  background: #fff;
  .tweets-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom:0.2rem;
    img{
      width: 0.3rem;
      height: 0.3rem;
    }
    span{
      color:#F29647;
      font-size: 0.3rem;
      margin: 0 0.33rem;
    }
  }
  .tweet-item{
    width: 100%;
    margin:0.2rem 0;
    .t-title{
      font-family:PingFangSC-Medium;
      width: 100%;
      color:#4C4C4C;
      font-size: 0.28rem;
      text-align: left;
      line-height: 0.4rem;
    }
    .t-desc{
      font-family:PingFangSC-Regular;
      width: 100%;
      height: 0.98rem;
      color: #9B9B9B;
      font-size: 0.24rem;
      margin-top: 0.14rem;
      line-height: 0.33rem;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
.martion{
  transition: all 0s ease 0s!important;
}
</style>
