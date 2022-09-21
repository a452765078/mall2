import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import Cookie from 'vue-cookie'
import store from './storage/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import {Message} from 'element-ui'
import { InfiniteScroll } from 'mint-ui';
import axios from './api/index.js'


Vue.use(InfiniteScroll)


Vue.config.productionTip = false


Vue.prototype.$message = Message
Vue.prototype.axios = axios
Vue.use(Cookie)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
