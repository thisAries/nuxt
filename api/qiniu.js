import HttpRequest from '../assets/jslibs/dk-axios'

const getQiniu = data =>{
    return HttpRequest({
        url:'channel/get',
        methods:'get'
    })
}

const uploadImage = (data) => {
    return HttpRequest({
        url: 'https://upload-z2.qiniup.com',
        headers: {
            'content-type': 'multipart/form-data',
        },
        method: 'POST',
        data: data,
    });
};//上传图片方法

export{
    getQiniu,
    uploadImage
}