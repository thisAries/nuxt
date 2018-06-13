<template>
    <div class="page">
        <!-- 帖子详情 -->
        <div class="title">{{title}}</div>
        <div class="contents details" v-html="contents"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'这是富文本的标题哈哈啊哈哈啊这是富文本的标题哈哈啊哈哈啊这是富文本的标题哈哈啊哈哈啊这是富文本的标题哈哈啊哈哈啊',
            contents:"这是富文本"
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
}
.title{
    width: 6.9rem;
    margin: .53rem auto;
    font-size: .32rem;
    box-sizing: border-box;
    color: #000;
    font-weight: 600;
    text-align: center;
}
.details{
    margin-top: 0.5rem;
    width: 100%;
    padding:0 0.3rem;
    box-sizing: border-box;
}
</style>
