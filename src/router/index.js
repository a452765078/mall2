import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import Product from '../pages/Product.vue'
import Login from '../pages/Login.vue'

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
        path:"/product",
        name:'Product',
        component:Product,
    },
    {
        path:"/login",
        name:'login',
        component:Login,
    }
]

export default new VueRouter({
    routes
})