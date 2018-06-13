/*
* 登录、注册模块示例
* */
import dkAxios from '../assets/jslibs/dk-axios'

/**
 * 登录接口
 * @param data
 */
const login=data=>{
  return  dkAxios({
      url:'h5/patient/login',
      method:'POST',
      data:data
  })
}
/**
 * 注册接口
 * @param data
 */
// const register=data=>{
//   return dkAxios({
//     url:'login/register',
//     method:'POST',
//     data
//   })
// }

export {
  login,
}
