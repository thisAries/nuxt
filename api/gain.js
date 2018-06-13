import HttpRequest from '../assets/jslibs/dk-axios'

const isHouse = data =>{
    return HttpRequest({
        url:'h5/house',
        methods:'get'
    })
}//获取他是否已经有过预约

const appointment = data =>{
    return HttpRequest({
        url:'h5/house',  
        data:data,
        methods:'put'
    })
}//立即预约

const list = data =>{
    return HttpRequest({
        url:'h5/house/list',
        methods:'get'
    })
}//获取当月日历的数据

const remind = data =>{
    return HttpRequest({
        url:'h5/house/remind',
        data:data,
        methods:'put'
    })
}//修改预约到时提醒



export {
    isHouse,
    appointment,
    list,
    remind,
}