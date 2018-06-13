<template>
    <div class="page">
        <div class="feedback">
            <textarea class="feedback-teg" v-model="feedback" placeholder="* 有什么想对医生说的可以在这里输入哦！" maxlength="200"></textarea>
            <div class="feedback-sp"><span class="feedback-size">{{size}}</span>/200</div>
        </div>
        <div class="post">
            <div class="post-teg" >上传图片（{{postSize}}/6）</div>
            <div class="post-img">
                <div class="img-item" v-for="(item,key,index) in valuePath" :key="index">
                    <div class="item-del" @click="delImg(key)"></div>
                    <img class="item-img" :src="item.url"/>
                    <mt-spinner v-if="item.show" class="item-snake" type="snake" color="#26a2ff"></mt-spinner>
                </div>
                <div class="img-frow" @click="postImg"></div>
                <input type="file" style="display:none" ref="fileInpt" accept="image/jpeg,image/jpg,image/png" @change="getImg" />
                <!-- accept 不能对安卓系统有效 -->
            </div>
        </div>
        <div class="postBtn" @click="postData">提交</div>
        <div class="reply-tel" @click="boda"><img src = "../../assets/images/ic_call.png" />拨打</div>
    </div>
</template>

<script>
let Base64 = require('js-base64').Base64;
let config 
import { back } from '../../api/mine'
import { getQiniu,uploadImage } from '../../api/qiniu'
export default {
    data(){
        return {
            feedback:'',//意见反馈
            size:0,//当前字数
            postSize:0,//当前上传的图片数量
            imgPost:[],//哈希值存储
            token:'',//token
            url:'',//url
            valuePath:[],//托管当前已经上传的图片的数组,path指向本地地址
        }
    },
    created(){
        
        this.network().getQiniu();
    },
    mounted(){
        console.log(this.size)
    },
    watch:{
        feedback:function(v,n){
            this.size = this.feedback.trim().length;
            if(this.size == '200'){
                this.$toast("最多可以输入200个字哦~")
            }
            if(this.size == ''){
                this.size = 0
            }   
        }
    },
    methods:{
        network(){
            let self = this;
            return{
                async getQiniu(){
                    let res = await getQiniu();
                    if(res.status == 200){
                        self.token = res.data.token;
                        self.url = res.data.url;
                        console.log(res.data)
                    }
                },
                async postBack(data){
                    let res = await back(data);
                    if(res.status == 200){
                        self.$toast(res.data.message);
                    }
                }
            }
        },
        postData(){
            if(this.size == '0'){
                this.$toast("请输入您的建议")
                return;
            }
            var data = {
                content:this.feedback,
                images:this.imgPost,
                patientUuid:'不用填',
            }
            this.network().postBack(data);
        },
        postImg(){
            if(this.valuePath.length > 5){
                this.$toast("最多可以上传6张图")
                return; 
            }
            this.$refs.fileInpt.click();
        },
        async getImg(file){
            var that = this;
            var arr = JSON.parse(JSON.stringify(that.valuePath))
            var type = file.target.files[0].type;
            if(type.indexOf('image')!=-1){
                console.log("存在")
            }else{
                this.$toast("请选择图片!")
                return;
            }
            let formData = new FormData();
            formData.append('token', this.token);
            formData.append('file', file.target.files[0]);
            var path = Base64.encode(file.target.files[0]);
            var reader = new FileReader();
            reader.readAsDataURL(file.target.files[0]); // 读出 base64
            reader.onloadend = function () {
                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                var dataURL = reader.result;
                console.log(dataURL)
                arr.push({
                    url:dataURL,
                    show:true
                })
                // 逻辑处理
            };
            let res = await uploadImage(formData);
            if(res.status == 200){
                arr[arr.length-1] = {
                    url:that.url + '/' + res.data.hash,
                    show:false
                }
                that.imgPost.push(res.data.hash)
                that.valuePath = arr;
            }
        },
        delImg(val){
            console.log(this.imgPost)
            this.valuePath.splice(val,1) 
            this.imgPost.splice(val,1)
        },
        boda(){
            this.$toast("当前医生不在线哦~")
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    padding-top: .2rem;
}
.feedback{
    width: 100%;
    min-height: 3.13rem;
    background: #fff;
    padding: .25rem .3rem;
    box-sizing: border-box;
    .feedback-teg{
        width: 100%;
        min-height: 3rem;
        font-size: .28rem;
        color: #aeaeae;
        line-height: .4rem;
    }
    .feedback-sp{
        display: block;
        width: 100%;
        height: .76rem;
        line-height: .76rem;
        color:  #4A4A4A;
        text-align: right;
        border-bottom: solid 0.01rem #E5E5E5;
    }
    .feedback-size{
        color:#F5A623!important;
    }
}
.post{
    width: 100%;
    height: 3.07rem;
    padding:0 .33rem .22rem .33rem;
    box-sizing: border-box;
    background: #fff;
    .post-teg{
        width: 100%;
        height: .33rem;
        font-size: .24rem;
        color: #9B9B9B;
        margin-bottom: .29rem;
    }
    .post-img {
        display: flex;
        width: 100%;
        min-height: 1.87rem;
        .img-item{
            position: relative;
            width: 1.87rem;
            height: 1.87rem;
            border: solid .02rem #f5f5f5;
            display:inline-block;
            margin-right: .54rem;
            .item-img{
                width: 100%;
                height: 100%;              
            }
            .item-del{
                position:absolute;
                top: -.2rem;
                right: -.2rem;
                width: .4rem;
                height: .4rem;
                background: url('../../assets/images/ic_del.png') no-repeat;
                background-size: .4rem .4rem;
            }
            .item-snake{
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top:-.28rem;
                margin-left: -.28rem;
                width: .28rem;
                height: .28rem; 
            }
        }
        .img-frow{
            display: inline-block;
            width: 1.87rem;
            height: 1.87rem;
            background:#FAFAFA url("../../assets/images/ic_add.png") no-repeat center center;
            background-size: 100% 100%;
        }
    }
}
.postBtn{
    width: 6.75rem;
    height: .92rem;
    margin: .4rem auto;
    background-color: #F29647;
    text-align: center;
    line-height: .92rem;
    color: #fff;
    font-size: .32rem;
    border-radius: .05rem;
}
.reply-tel{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.7rem;
    margin: .3rem auto 0 auto;
    height: .92rem;
    background: #fff;
    font-size: .32rem;
    color: #AEAEAE;
    border: solid #D0D0D0 0.01rem;
    border-radius: 0.08rem;
    img {
        margin-right: .29rem;
        width: .4rem;
        height: .4rem;
    }
}

</style>
