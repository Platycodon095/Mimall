import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import env from './env'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

//使用接口代理后端域名和前端一致时可以直接写相对地址
//axios.defaults.baseURL = env.baseURL
axios.defaults.baseURL = '/api'
//mock数据
// const mock = false
// if(mock){
//   require('./mock/api')
// }
//超时处理
axios.defaults.timeout =5000
// 接口统一错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  //获取数据成功时
  if(res.status == 0){
    return res.data
  }else if (res.status == 10){
    //接口未登录时拦截，跳转登录页面[这里不用push跳是因为没有vue实例]
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
},)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueLazyLoad,{
  loading:'./static/imgs/loading-svg/loading-bars.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
