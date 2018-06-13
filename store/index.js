import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    
    state: {
        opend:true,//全局登录状态
        patientUuid:'',///全局托管账号 设置
        options:'',//治疗方案
        isApp:0,//全局是否预约管理

    },
    mutations: {
        setOpend(state,opend){
            state.opend = opend;
        },//
        setPatient(state,patientUuid){
            state.patientUuid = patientUuid;//将全局的账号uuid 更改!
        },
        setOptions(state,options){
            state.options = options;//更改治疗方案
        },
        setIsApp(state,isApp){
            state.isApp = isApp;
        },
        
    }
})

export default store