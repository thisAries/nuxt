<template>
    <div class="page">
        <div class="personal">
            <div class="box"><span class="title">姓名</span><span class="name">{{personal.name}}</span></div>
            <div class="box"><span class="title">性别</span><span class="name">{{personal.gender}}</span></div>
            <div class="box"><span class="title">年龄</span><span class="name">{{personal.age}}</span></div>
        </div>
        <div class="test">
            <div class="box"><span class="title">检验号</span><input class="inpt" type="text" v-model="testNum" placeholder="请输入检验号" /></div>
            <div class="box">
                <label class="title">检验项</label>
                <select class="select" @change="test">
                    <option style="display:none">请选择检验项</option>
                    <option v-for="(item,key,index) in testData" :key="index" :value="item.uuid">{{item.name}}</option>
                </select>
            </div>
        </div>
        <div class="text">*以下不是选填项</div>
        <div class="address">
            <div class="box"><span class="title">科别</span><input class="inpt" type="text" v-model="division" placeholder="请输入临床印象" /></div>
            <div class="box"><span class="title">床号</span><input class="inpt" type="text" v-model="bedNo" placeholder="请输入床号" /></div>
            <div class="box"><span class="title">住院/门诊号</span><input class="inpt" type="text" v-model="Outpatient" placeholder="请输入住院/门诊号" /></div>
            <div class="box"><span class="title">标本</span><input class="inpt" type="text" v-model="sample" placeholder="请输入标本" /></div>
        </div>
        <div class="note">
            <p>备注</p>
            <textarea v-model="note" placeholder="请输入需要备注的内容"></textarea>
        </div>
        <div class="upload">
            <p>请务必上传化验单照片（保证拍摄清晰）</p>
            <div class="upload-box">
                <div class=""><img src = "" /></div>
                <div class="up" @click="upImg"></div>
                <input style="display:none" type="file" @change="getImg" ref="fileInpt" />
            </div>
        </div>
        <div class="post" @click="network().postAssay()">上传</div>
    </div>
</template>

<script> 
import { getQiniu,uploadImage } from '../../api/qiniu'
import { getAssay,getCheck,postAssay } from '../../api/home'
export default {
    layout:'default',
    data(){
        return {
            personal:'',
            testData:[],//检验项
            testUuid:'',//检验项选中
            testNum:'',//检验号

            division:'',//科别
            bedNo:'',//床号
            Outpatient:'',//门诊号
            sample:'',//标本

            note:'',//备注

            postImg:[],//上传得照片得hash
               
        }
    },
    created(){

    },
    mounted(){
        this.network().getAssay();
        this.network().getCheck();
    },
    methods:{
        test(val){
            this.testUuid = val.target.value;
        },
        upImg(){
            this.$refs.fileInpt.click()
        },
        async getImg(file){
            let formData = new FormData();
            formData.append('token', this.token);
            formData.append('file', file.target.files[0]);
            let res = await uploadImage(formData);
            if(res.status == 200){
                this.hash.push(res.data.hash)
            }
        },
        vForm(){
            if(!this.testNum.trim()){
                this.$toast("请输入检验号")
                return false;
            }
            if(!this.testUuid){
                this.$toast("请选择检验项")
                return false;
            }
            if(!this.division.trim()){
                this.$toast("请输入临床印象")
                return false;
            }
            if(!this.bedNo.trim()){
                this.$toast("请输入床号")
                return false;
            }
            if(!this.Outpatient.trim()){
                this.$toast("请输入住院/门诊号")
                return false;
            }
            if(!this.sample.trim()){
                this.$toast("请输入标本")
                return false;
            }
            return true;
        },
        network(){
            let self = this;
            return {
                async getQiniu(){
                    let res = await getQiniu();
                },
                async getAssay(){
                    let res = await getAssay();
                    if(res.status == 200){
                        self.personal = res.data
                    }
                },
                async getCheck(){
                    let res = await getCheck();
                    if(res.status == 200){
                        self.testData = res.data
                    }
                },
                async postAssay(){
                    if(!self.vForm()){
                        return;
                    }
                    var data = {
                        "category": "string",
                        "checkNum": 0,
                        "checkx": "string",
                        "images": "json格式即可",
                        "outPatientNum": 0,
                        "patientNum": 0,
                        "patientUuid": "不用填",
                        "remark": "不是必填项",
                        "specimen": "string"
                    }
                }
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.page{
    padding-bottom: 1.1rem;
}
.box{
    // 
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: .28rem;
    font-family:PingFangSC-Regular;
    border-bottom:solid 0.01rem #D7D7D7;
}
.inpt{
    flex:1;
    height: .8rem;
    font-size: 0.28rem;
    color: #bfbfbf;
}
.title{
    width: 1.9rem;
    color:#333;
}
.personal{
    margin-top: 0.2rem;
    width: 100%;
    height: 2.92rem;
    padding: 0.22rem 0.4rem 0 .4rem;   
    background: #fff;
    .name{
        flex:1;
        color:#BFBFBF;
    }
}
.test{
    margin-top: 0.2rem;
    width: 100%;
    height: 1.91rem;
    background: #fff;
    padding: 0.1rem 0.4rem 0 .4rem;   
    .select{
        flex:1;
        font-size: 0.28rem;
        color: #bfbfbf;
    }
}
.text{
    width: 100%;
    height: 0.7rem;
    line-height: .7rem;
    padding-left: 0.4rem;
    font-size:0.28rem;
    color: #9b9b9b; 
}
.address{
    width: 100%;
    height: 3.68rem;
    padding: 0.1rem .4rem 0 0.4rem;
    background: #fff;
}
.note{
    margin-top: 0.2rem;
    width: 100%;
    height: 2.92rem;
    background: #fff;
    padding: 0.33rem 0.4rem 0.1rem 0.4rem;
    box-sizing: border-box;
    p{
        font-size: 0.28rem;
        color:#333;
        height: 0.4rem;
        line-height: .4rem;
    }
    textarea{
        margin-top: 0.1rem;
        width:100%;
        height: 2rem;
    }
}
.upload{
    margin-top: 0.2rem;
    width: 100%;
    height: 3.09rem;
    background: #fff;
    padding: 0.33rem .4rem;
    box-sizing: border-box;
    p{
        font-size: 0.28rem;
        color: #333;
        font-family: PingFangSC-Regular;
    }
    .upload-box{
        margin-top: 0.3rem;
        display: flex;
        .up{
            width: 1.46rem;
            height: 1.46rem;
            background: url("../../assets/images/ic_add.png") no-repeat center center;
            background-size:100% 100%;
        }
    }
}
.post{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 1.1rem;
    color: #fff;
    text-align: center;
    background: #F29647;
    line-height: 1.1rem;
}
</style>