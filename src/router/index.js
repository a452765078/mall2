import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import ProductInfo from '../pages/ProductInfo.vue'
import Login from '../pages/Login.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import OrderConfirm from '../pages/OrderConfirm.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import OrderDetail from '../pages/OrderDetail.vue'
import OrderList from '../pages/OrderList.vue'
import alipay from '../pages/alipay.vue'

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
        component:OrderConfirm,
    }
    
    ,{
        path:"/shoppingCart",
        name:'shoppingCart',
        component:ShoppingCart,
    },
    {
        
        path:"/orderDetail",
        name:'orderDetail',
        component: OrderDetail,
    },
    {
        
        path:"/OrderList",
        name:'OrderList',
        component: OrderList,
    },{
        path:"/alipay",
        name:'alipay',
        component: alipay,
    }

]

export default new VueRouter({
    routes
})