import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    baseURI: '/',
    routes: [
        {
            path: '/add/payment/:category',
            name: 'addPayment',
            component: () => import('@/components/AddPaymentForm')
        },
        {
            path: '/*',
            name: 'paymentList',
            component: () => import('@/components/AddPaymentForm')
        }
    ]
})
