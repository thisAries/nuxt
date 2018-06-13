<template>
    <div class="MboxC">
        <div class="crystal"></div>
        <div class="name">血常规（每周3~4次）</div>
        <div class="view">
            <div class="view-item"></div>
            <div class="view-item" v-for="(item,index) in addPhoto" :key="index">
                <img class="view-del" @click="delPhoto(index)" src = "../../assets/images/ic_del_red.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            addPhoto:['1','2','3'],
        }
    },
    methods:{
        delPhoto(key){
            console.log(key)
            this.addPhoto.splice(key,1)
            console.log(this.addPhoto)
        }
    }

}
</script>

<style lang="scss" scoped>
.MboxC{
    width: 100%; 
    min-height: 3.41rem;
    background: #fff;
    padding: .38rem;
    box-sizing: border-box;
    margin-top: .2rem;
    .name{
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        color: #333;
        font-size: .28rem;
        text-align: left;
        margin-bottom: .07rem;
    }
    .view{ 
        display: flex;
        
        flex-wrap: wrap;
        width: 100%;
        min-height: 1.44rem;
        margin-top: .53rem; 
        .view-item{
            position: relative;
            display: inline-block;
            width: 2rem;
            height:2rem;
            border: solid 0.01rem #CCCCCC;
            background: url("../../assets/images/ic_add.png") no-repeat center center;
            background-size: 100% 100%;     
            margin: auto;
        }
        .view-del{
            position: absolute;
            top: -.18rem;
            right: -.18rem;
            width: .36rem;
            height: .36rem;
        }
    }

}
</style>
