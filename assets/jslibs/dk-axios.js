/**
 * Created by IvanCai on 2017/4/19.
 */
import axios from 'axios'
import utils from './dk-utils'
import { Indicator } from 'mint-ui';//圈圈
import { Toast } from 'mint-ui';//提示
import { apiDomain } from '../../configs/enviroment'

const dkAxios = axios.create({
  baseURL: apiDomain,
  timeout: 80000, //设置超时时间
})//基本配置

dkAxios.interceptors.request.use(function (config) {
  Indicator.open();
  config.headers={'X-Access-Token':'1f4aa74fd2c6c59cd83b26'}
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

dkAxios.interceptors.response.use(function (response) {
  Indicator.close();
  return response;
}, function (error) {
  Indicator.close();
  let {status, data} = error.response
  switch (status) {
    case 401:
      vm.$router.push('/login')
          break
    case 412:
      vm.$router.push('/login')
      break
    default:
      Toast(data.error.message)
      return Promise.reject(data);
  }
});
export default dkAxios
