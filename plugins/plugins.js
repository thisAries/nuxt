
import Vue from 'vue'
import MintUI from 'mint-ui'
import '../assets/jslibs/rem'
import '../assets/styles/app.scss'
 
Vue.use(MintUI)
Vue.filter('cdn', (value) => {
    console.log(value);
    
    if (!value) return '';
    
    let cdn = window.sessionStorage.getItem('url');
  
    if (!cdn) {
      // const res = await getUploadToken();
      cdn = 'xxx';
      // window.sessionStorage.setItem('url', cdn);
    }
  
    const index = value.lastIndexOf('/');
    
    if (index === -1) {
      return cdn + value;
      // return '';
    }
  
    return cdn + value.substring(index + 1);
    // return '';
});