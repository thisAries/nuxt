<template>
    <div class="page">
        <div class="visit">
            <div class="visit-btn" @click="editor">{{teg}}</div>
        </div>
        <!-- <div class="view-item">

        </div> -->
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            teg:'编辑'
        }
    },
    methods:{
        editor(){
            if(this.teg == '编辑'){
                this.teg = '完成'
            }else{
                this.teg = '编辑'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.visit{
    width: 100%;
    height: .8rem;
    background: #fff;
    .visit-btn{
        float: right;
        width: 1.5rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .28rem;
        color: #141414;
    }
}
.view-item{
    width: 6.9rem;
    min-height: 1.57rem;
    background: #fff;
    margin: .2rem;
    border-radius: .08rem;
}
</style>
