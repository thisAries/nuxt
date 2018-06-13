<template>
    <div class="page">
        <!-- 添加提醒 -< 设置时间 -< 选择药品 -< 设置剂量（当前） -->
        <div class="top">
            <span>已选择药物</span>
            <div class="top-btn">继续添加</div>
        </div>
        <div class="view-item">
            <p>药品甘草酸二铵胶囊</p>
            <div class="item-dose">
                <span class="dose-a">剂量</span>
                <div class="dose-box"><input  /></div>
                <span class="dose-b">单位</span>
                <select class="dose-box dose-bg">
                    <option>mg</option>
                    <option>片</option>
                    <option>包</option>
                </select>
            </div>
        </div>
        <div class="enter" @click="go('./complete')">确认</div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        go(val){
            this.$router.push(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    padding-bottom:1.1rem;
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    background: #fff;
    span{
        font-size: .32rem;
        color: #333;
        font-weight: 600;
        margin-left: .3rem;
    }
    .top-btn{
        margin-right: .3rem;
        color: #f29647;
        font-size: .28rem;
    }
}
.view-item{
    margin-top: .2rem;
    width: 100%;
    height: 1.71rem;
    background: #fff;
    padding: .17rem .3rem .2rem .34rem;
    box-sizing: border-box;
    p{
        font-size: .28rem;
        color: #333;
    }
    .item-dose{
        display: flex;
        align-items: center;
        width: 100%;
        height: .72rem;
        margin-top: .22rem;
        .dose-a{
            margin-right: .2rem;
        }
        .dose-b{
            margin-right: .2rem;
            margin-left: .38rem;
        }
        .dose-box{
            width: 2.47rem;
            height: .72rem;
            padding: 0 .3rem;
            box-sizing: border-box;
            border: solid 0.01rem #dfe3e8;
            input{
                width: 100%;
                height: 100%;
            }
        }
        .dose-bg{
            background: url('../../../assets/images/ic_down.png') no-repeat;
            background-position: 2.1rem center;
            background-size: .2rem .2rem;
        }
    }
}
</style>
