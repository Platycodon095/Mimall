import Vue from "vue";
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from "./pages/product.vue"
import Detail from "./pages/detail.vue"
import Login from './pages/login.vue'
import Register from './pages/register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect:'/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: "/login",
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: 'orderList',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path: 'confirm',
                    name: 'orderConfirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'orderPay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'pay',
                    name: 'pay',
                    component: () => import('./pages/pay.vue')
                }
            ]
        }

    ]
})