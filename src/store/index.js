import Vue from 'vue'
import Vuex from 'vuex'
import {payments} from '../db/data'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsPageCount: 0
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        setPaymentsPageCount(state, pageSize) {
            state.paymentsPageCount = Math.ceil(payments.length / pageSize)
        },
        addPayment(state, payload) {
            state.paymentsList.push(payload)
        }
    },
    getters: {
        getPayments: state => state.paymentsList,
        getPaymentsPageCount: state => state.paymentsPageCount
    },
    actions: {
        fetchData({commit}, page) {
            return new Promise((resolve) => {
                // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
                setTimeout(() => {
                    const start = page.size * page.number
                    const end = start + page.size
                    resolve(payments.slice(start , end))
                }, 1000)
            }).then(res => {
                // запускаем изменение состояния через commit
                commit('setPaymentsListData', res)
            })
        }
    },

})
