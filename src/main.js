import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import Cookie from 'vue-cookie'
import store from './storage/index.js'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll)


Vue.config.productionTip = false

axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
axios.interceptors.request.use((config)=> {
  return config
})
axios.interceptors.response.use((res)=>{
  // console.log("res =>",res)
  // let url = window.location.hash
  let response = res.data;
  if(response.status === 0) {
    return response.data
  }else if(response.status === 10){
    alert("需要登录")
    window.location.href = "/#/login";
    // return response.msg;
  }else {
    alert(response.msg)
    return Promise.reject(response.msg);
  }
})

Vue.prototype.axios = axios
Vue.use(Cookie)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
