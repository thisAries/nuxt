<template>
    <div class="page">
        <div class="top">
            <input class="top-inpt" type="text" placeholder="请输入药品名称">
            <div class="top-btn">搜索</div>
        </div>
        <mt-index-list>
            <mt-index-section index="A">
                <mt-checklist
                    v-model="value"
                    :options="['aaa得开始', 'optionB', 'optionC','optionA']">
                </mt-checklist>
            </mt-index-section>
        </mt-index-list>
        <div class="bottom-box"></div>
        <div class="enter" @click="push('./record/options')">确认</div>
    </div>
</template>

<script>
export default {
    layout:'',
    data(){
        return{
            value:[],
            value1:[],
            value2:[],
        }
    },
    methods:{
        go(val){
            this.$router.push(val)
        },
        push(val){
            this.$router.replace(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-box{
    width: 100%;
    height: 1.1rem;
}
.top{
    display: flex;
    align-items: center;
    width: 100%;
    height: .98rem;
    background: #fff;
    margin-bottom: .2rem;
    .top-inpt{
        flex: 1;
        margin-left: .3rem;
        height: .57rem;
        background: #f6f6f6 url("../../../assets/images/ic_search.png") no-repeat;
        background-position: .26rem .14rem;
        background-size: .3rem .3rem;
        border-radius: .3rem;
        padding-left: .75rem;
        box-sizing: border-box;
    }
    .top-btn{
        width: 1rem;
        font-size: .28rem;
        color: #4c4c4c;
        text-align: center;
    }
}
.view{
    width: 100%;
    height: .93rem;
    padding-top: 0.2rem;
    box-sizing: border-box;
    overflow-x:auto;
    white-space: nowrap;
    .view-item{
        padding: 0 .25rem;
        height: .48rem;
        line-height: .48rem;
        display: inline-block;
        box-sizing: border-box;
        border:solid 0.02rem #CFCFCF;
        border-radius: .1rem;
        margin:0 .1rem;
    }
    .active{
        border: solid 0.02rem #F29647!important;
        color: #F29647!important;
    }
}
</style>
