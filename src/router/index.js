import Vue from 'vue'
import Router from 'vue-router'
import AddPaymentForm from '@/components/AddPaymentForm'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/add/payment/:category?',
            name: 'PaymentForm',
            component: AddPaymentForm
        }
    ]
})
