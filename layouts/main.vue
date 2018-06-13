<template>
  <div class="king">
    <nuxt/>
    <div class="Bot">
        <Menu/>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'
export default {
    data(){
        return{}
    },
    components:{
        Menu:Menu
    }
}
</script>

<style lang="scss" scoped>
.king{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .Bot{
        position:fixed;
        bottom: 0;
        width: 100%;
        height: 0.98rem;
    }
}
.page{
    padding-bottom: 1.18rem;
    font-family:PingFangSC;
}
</style>
