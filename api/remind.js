import HttpRequest from '../assets/jslibs/dk-axios'

const drug = data =>{
    return HttpRequest({
        url:'h5/drug',
        methods:'get'
    })
}//获取添加药物列表

const postDrug = data =>{
    return HttpRequest({
        url:'h5/drug',
        methods:'post',
        data:data,
    })
}

const unit = data =>{
    return HttpRequest({
        url:'h5/drug/unit',
        methods:'get',
        data:data,
    })
}

export {
    drug,
    postDrug,
    unit,
}