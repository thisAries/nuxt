<template>
    <div class="editor-top"><div class="editor-btn" @click="putOpen">{{teg}}</div></div>
</template>

<script>
export default {
    data(){
        return{
            teg:'编辑'
        }
    },
    methods:{
        putOpen(){
            if(this.teg == '编辑'){
                this.teg = '完成'
                this.$emit('topEditor',true);//打开 允许编辑操作
            }else{
                this.teg = '编辑'
                this.$emit('topEditor',false);//关闭 
            }
        }
    }
}
</script>

<style lang="scss"> 
.editor-top{
    width: 100%;
    height: .8rem;
    background: #fff;
    .editor-btn{
        float: right;
        text-align: center;
        width: 1.1rem;
        height: .8rem;
        line-height: .8rem;
        font-size: .28rem;
        color: #141414;
    }
}
</style>
