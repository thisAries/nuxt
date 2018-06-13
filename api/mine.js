import HttpRequest from '../assets/jslibs/dk-axios'
// mine -> api



const Personal = data =>{
    return HttpRequest({
        url:'h5/center',
        methods:'get',
    })   
}//获取基本信息

const putPO = data =>{
    return HttpRequest({
        url:'h5/center',
        methods:'put',
        data:data,
    })
}//更新体重，

const back = data =>{
    return HttpRequest({
        url:'h5/center/back',
        methods:'post',
        data:data
    })
}//意见反馈

const call = data =>{
    return HttpRequest({
        url:'h5/center/call',
        methods:'put',
        data:data
    })
}

const demoList = data =>{
    return HttpRequest({
        url:'h5/center/list',
        methods:'get'
    })
}//病例

const putPwd = data =>{
    return HttpRequest({
        url:'h5/center/pwd',
        methods:'put',
        data:data,
    })
}//修改密码

const isRecord = data =>{
    return HttpRequest({
        url:'h5/center/record',
        methods:'get',
        data:data,
    })   
}//是否15天更新

const remove = data =>{
    return HttpRequest({
        url:'h5/center/remove',
        methods:'put',
        data:data,
    }) 
}

export{
    
    
    // ///////
    Personal,
    putPO,
    back,
    call,//修改消息免打扰
    demoList,
    putPwd,
    isRecord,//强制更新 
    remove,
    // ///////
}