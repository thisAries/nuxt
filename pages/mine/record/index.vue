<template>
    <div class="page">
        <!-- 上传记录 -->
        <ul class="record-top">
            <li class="top-item" v-for="(item,key,index) in topList" :key='index' @click="chooseTop(key)" :class="{active:key==topIndex}">{{item}}</li>
        </ul>
        <div class="date">
            <span class="date-title">选择日期</span>
            <span class="date-tag">2018年03月26日</span>
            <img src = "../../../assets/images/ic_next.png" />
        </div>
        <div class="timeline">
            <p>2018.03.17</p>
            <TimeAxis :list="list">
                <template slot="content" slot-scope="scope">
                    <div class="left-box">
                        <div class="axis-time">{{scope.row.time}}</div>
                        <div class="axis-desc">{{scope.row.description}}</div>
                    </div>
                </template>
            </TimeAxis>
        </div>
        <div class="timeline">
            <p>2018.03.17</p>
            <TimeAxis :list="list">
                <template slot="content" slot-scope="scope">
                    <div class="left-box">
                        <div class="axis-time">{{scope.row.time}}</div>
                        <div class="axis-desc">{{scope.row.description}}</div>
                    </div>
                </template>
            </TimeAxis>
        </div>
        <div class="timeline">
            <p>2018.03.17</p>
            <TimeAxis :list="list">
                <template slot="content" slot-scope="scope">
                    <div class="left-box">
                        <div class="axis-time">{{scope.row.time}}</div>
                        <div class="axis-desc">{{scope.row.description}}</div>
                    </div>
                </template>
            </TimeAxis>
        </div>
    </div>
</template>

<script>
import TimeAxis from '../../../components/TimeAxis'
export default {
    data(){
        return {
            topList:['化验单记录','器械检测记录','自我检测记录'],
            topIndex:0,
            list:[{
                    time:'18:22',
                    description:'腰穿正常、白细胞26.08、红细胞2.6腰穿正常、白细胞26.08、红细胞2.62……'
                },
                {
                    time:'18:22',
                    description:'腰穿正常、白细胞26.08、红细胞2.6腰穿正常、白细胞26.08、红细胞2.62……'
                },
                {
                    time:'18:22',
                    description:'腰穿正常、白细胞26.08、红细胞2.6腰穿正常、白细胞26.08、红细胞2.62……'
                },
                {
                    time:'18:22',
                    description:'腰穿正常、白细胞26.08、红细胞2.6腰穿正常、白细胞26.08、红细胞2.62……'
                },
            ]
        }
    },
    methods:{
        chooseTop(key){
            this.topIndex = key;
        }
    },
    components:{
        TimeAxis,
    }
}
</script>

<style lang="scss" scoped>
.active{
    color:#F29647!important;
    border-bottom:solid .08rem #F29647;
}
.record-top{
    display: flex;
    width: 100%;
    height: .98rem;
    background: #fff;
    border-bottom: solid 0.01rem #F6F6F6;
    .top-item{
        flex: 1;
        margin: 0 0.2rem;
        text-align: center;
        line-height: .98rem;
        font-size: .28rem;
        color: #4A4A4A;
    }
}
.date{
    display: flex;
    align-items: center;
    margin-top: .2rem;
    width: 100%;
    height: .8rem;
    background: #fff;
    .date-title{
        width:1.55rem;
        font-size: .3rem;
        color: #f29647;
        text-align: right;
    }
    .date-tag{
        flex: 1;
        text-align: right;
        margin-right: .25rem;
    }
    img {
        width: .3rem;
        height: .3rem;
        margin-right: .63rem;
    }
}
.timeline{
    // 时间轴
    width: 100%;
    padding-left: .26rem;
    p{
        width: 100%;
        line-height: .4rem;
        padding: .3rem 0 .2rem .61rem;
        box-sizing: border-box;
        font-size: .28rem;
        color:#4C4C4C;
    }
    .left-box{
        width:6.59rem;
        height: 1.13rem;
        background: #fff url("../../../assets/images/ic_next.png") no-repeat 6rem center;
        background-size: .32rem .32rem;
        padding: .13rem 0 0 .25rem;
        box-sizing: border-box;
        border-radius: .06rem;
        margin-top: -.12rem;
        margin-bottom: .32rem;
        .axis-time{
            font-size: .26rem;
            color: #9B9B9B;
            line-height: .37rem;
        }
        .axis-desc{
            margin-top: .06rem;
            width: 4.87rem;
            line-height: .37rem;
            white-space: nowrap;
            font-size: .26rem;
            color: #4C4C4C;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>
