<template>
    <div class="remind">
        <div class="anitBox" :class="{'active':$parent.anit}">
            <div class="box" @click="getDate">
                <div class="square"></div>
                <div class="box-top"> 
                    <div class="date">06:00</div>
                    <mt-switch v-if="switchFlag" v-model="flag"></mt-switch>
                    <div v-if="!switchFlag" class="text">已服药</div>
                </div>
                <div class="box-middle">
                    <img class="img-a" src = "../assets/images/ic_view.png" />
                    <span>查看服药详情</span>
                    <div class="box-drug">环磷酰胺环磷酰胺环磷酰胺环磷酰胺环磷酰胺</div>
                    <img class="img-b" src = "../assets/images/right.png" />
                </div>
            </div>
            <div class="flowBox" @click="delDate">删除</div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag:'',
        }
    },
    props:["switchFlag"],
    mounted(){
 
    },
    methods:{
        getDate(){
            if(this.$route.fullPath == '/remind/list'){
                return;
            }
            this.$parent.showDialog()
            //使用父组件的方法 并向其传值 将uuid传入 让父组件显示对应的数据
        },
        delDate(){
            this.$parent.showDellog()
        }
    }
}
</script>

<style lang="scss" scoped>
.remind{
    width: 100%;
    height: 1.82rem;
    overflow: hidden;
    margin-bottom:.2rem;
    border-radius: 0.08rem;
}
.box{
    float:left; 
    position: relative;
    width: 6.9rem;
    height: 100%;
    padding: .17rem .25rem .33rem .4rem;
    background: #fff;
    .square{
        position: absolute;
        width: 0.08rem;
        height: 0.2rem;
        left: 0;
        top: 0.44rem;
        background: #F29647;
    }
    .box-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: .7rem;
        .date{
            font-size: .5rem;
            color: #F29647;
            font-weight: 600;
        }
    }
    .box-middle{
        display: flex;
        align-items: center;
        margin-top: .2rem;
        width: 100%;
        height: .45rem;
        .img-a{
            width: .45rem;
            height: .45rem;
        }
        span{
            flex:1;
            margin-left: .2rem;
            font-size: .32rem;
            color: #000;
            font-weight: 600;
            text-align: left;
        }
        .box-drug{
            width: 2.2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .img-b{
            width: .08rem;
            height: .16rem;
        }
    }
}
.flowBox{
    float:left;
    width: 1.37rem;
    height: 1.82rem;
    background: #f76759;
    text-align: center;
    line-height: 1.82rem;
    color: #fff;
    font-size: .28rem;
}
.active{
    transform: translateX(-1.37rem)
}
.anitBox{
    width: 8.27rem;
    height: 1.82rem;
    transition: all 0.8s ease 0s;
}
</style>
