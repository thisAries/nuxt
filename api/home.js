import HttpRequest from '../assets/jslibs/dk-axios'
// index and menu -> api
const slideshow = data =>{
    // 轮播图
    return HttpRequest({
        url:'h5/patient/slideshow',
        methods:'get'
    })
}

const sysreply = (limit,offset) =>{
    //系统公告列表
    return HttpRequest({
        url:'h5/patient/sysreply?limit='+ limit +'&offset=' + offset,
        methods:'get'
    })
}

const daytweet = (limit,offset) =>{
    //每日推文列表
    return HttpRequest({
        url:'h5/patient/daytweet?limit='+ limit +'&offset=' + offset,
        methods:'get'
    })
}
///////////////////////////////////////////////////////////////////////////
const getAssay = ()=>{
    // 化验单记录
    return HttpRequest({
        url:'h5/patient/assay',
        methods:'get'
    })
}
const getCheck = ()=>{
    return HttpRequest({
        url:'h5/patient/check',
        methods:'get'
    })
}
const postAssay = data =>{
    return HttpRequest({
        url:'h5/patient/assay',
        methods:'post',
        data:data,
    })
}

const login = data =>{
    return HttpRequest({
        url:'h5/patient/login',
        methods:'post',
        data:data,
    })
}//登录操作

export {
    slideshow,
    sysreply,
    daytweet,
    ///////////
    getAssay,
    getCheck,
    postAssay,
    login,
    
}