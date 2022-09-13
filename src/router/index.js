import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import ProductInfo from '../pages/ProductInfo.vue'
import Login from '../pages/Login.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import orderConfirm from '../pages/orderConfirm.vue'

Vue.use(VueRouter)

let routes = [   
    {
        path:"/index",
        name:'index',
        component:Index,
    },
    {
        path:"/",
        name:'index',
        component:Index,
        redirect:"/index"
    },
    {
        path:"/productInfo/:id",
        name:'productInfo',
        component:ProductInfo,
    },
    {
        path:"/login",
        name:'login',
        component:Login,
    },
    {
        path:"/productDetail/:id",
        name:'productDetail',
        component:ProductDetail,
    },
    {
        path:"/orderConfirm",
        name:'orderConfirm',
        component:orderConfirm,
    }

]

export default new VueRouter({
    routes
})