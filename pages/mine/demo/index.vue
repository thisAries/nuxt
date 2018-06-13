<template>
    <div class="page">
        <TopEditor ref="editor"></TopEditor>
        <div class="ceil-item">
            <img class="head" src="../../../assets/images/ic_head_boy.png" />
            <div class="item-box">
                <p class="item-name">小沈阳</p>
                <p class="item-desc">ALL-2015方案</p>
            </div>
            <div class="item-right" :class="{active:!delFlag}"></div>
            <div class="item-right-copy" :class="{active:delFlag}" @click="deldialog = true">删除</div>
        </div>
        <!-- 以下是脱离文档流部分 -->
        <div class="addChild">添加患儿病例</div>
        <div class="mask" v-if="deldialog">
            <div class="dialog">
                <div class="dialog-title">是否确认退出删除？</div>
                <div class="dialog-btn">
                    <div class="btn-carry" @click="deldialog = false">取消</div>
                    <div class="btn-enter" @click="putRemove">确认</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { remove } from '../../../api/mine'
import TopEditor from '../../../components/TopEditor'
export default {
    data(){
        return {
            delFlag:false,
            deldialog:false
        }
    },
    components:{
        TopEditor,
    },
    mounted(){
        var that = this;
        this.$refs.editor.$on('topEditor',function(val){
            that.delFlag = val;  
        })
    },
    methods:{
        async putRemove(){
            var data = {
                uuid : '222222222'
            }
            let res = await remove();
            if(res.status == 200){
                console.log(res.data)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: .8rem;
    background: #fff;
    margin-bottom: .4rem;
    .top-teg{
        width: 1.2rem;
        height: 100%;
        line-height: .8rem;
        font-size: .28rem;
        color: #141414;
        float: right;
        text-align: center;
    }
}
.ceil-item{
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    height: 1.62rem;
    background: #fff;
    margin:.2rem auto 0 auto; 
    box-shadow:0px 0.02rem 0px rgba(169,169,169,0.25);
    border-radius:.1rem;
    overflow: hidden;
    .head{
        width: 1.23rem;
        height: 1.23rem;
        margin-left: .2rem;
        border-radius: 50%;
    }
    .item-box{
        flex: 1;
        margin-left: 0.29rem;
        .item-name{
            font-size: .32rem;
            color: #333;
            line-height: .45rem;
            font-weight: 500;
        }
        .item-desc{
            margin-top: 0.09rem;
            font-size: .26rem;
            color: #999;
            line-height: .37rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .item-right{
        width: 1.67rem;
        height: 1.62rem;
        background: url("../../../assets/images/ic_my_selected.png") no-repeat .735rem center;
        background-size: .4rem .4rem;
        transition:all 0.8s ease 0s;
    }
    .item-right-copy{
        position: absolute;
        top: 0;
        right: -1.6rem;
        width: 1.6rem;
        height: 1.62rem;
        background: #F76759;
        transition:all 0.8s ease 0s;
        font-size: .28rem;
        color: #fff;
        line-height: 1.62rem;
        text-align: center;
    }
}
.active{
    right:0!important;
}
.addChild{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.1rem;
    text-align: center;
    line-height: 1.1rem;
    font-size: .3rem;
    color: #fff;
    background: #F29647;
}
.dialog{
    width: 5.6rem;
    height: 2.91rem;
    background: #fff;
    border-radius: .08rem;
    overflow: hidden;
    .dialog-title{
        width: 100%;
        height: 1.9rem;
        line-height: 1.9rem;
        text-align: center;
        font-size: .36rem;
        color: #000;
        border-bottom: solid 0.01rem #E5E5E5;
    }
    .dialog-btn{
        width: 100%;
        height: 1rem;
        .btn-carry{
            float: left;
            width: 50%;
            height: 1rem;
            border-right: solid 0.01rem #e5e5e5;
            box-sizing: border-box;
            text-align: center;
            line-height: 1rem;
            font-size: .36rem;
        }
        .btn-enter{
            float: left;
            width: 50%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: .36rem;
        }
    }

}
</style>
