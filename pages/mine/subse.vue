<template>
    <div class="page">
        <!-- 这是我的复诊的页面 我的复诊 提醒设置 服药提醒 我的复诊 我晕 -->
        <TopEditor></TopEditor>
        <div class="view-item"></div>
    </div>
</template>

<script>
import TopEditor from '../../components/TopEditor'
export default {
    data(){
        return{

        }
    },
    components:{
        TopEditor,
    }
}
</script>

<style lang="scss" scoped>
.view-item{
    width: 6.9rem;
    height: 1.57rem;
    background: #fff;
    border: .08rem;
    margin: .2rem auto 0 auto;
}

</style>
