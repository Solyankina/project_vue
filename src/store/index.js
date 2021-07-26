import Vue from 'vue'
import Vuex from 'vuex'
import {payments} from '../db/data'

Vue.use(Vuex)

function initAnalytics() {
    const categories = [...new Set(payments.map(p => p.category))]
    return categories.map(c => {
            return {
                category: c,
                data: payments.filter(p => p.category === c).reduce((sum, p) => sum + p.value, 0)
            }
        }
    )
}

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsPageCount: 0,
        paymentsFetchSize: 0,
        analytics: initAnalytics()
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        setPaymentsPageCount(state, pageSize) {
            state.paymentsPageCount = Math.ceil(payments.length / pageSize)
            state.paymentsFetchSize = pageSize
        },
        addPayment(state, payload) {
            if (payload.id) {
                const index = payments.findIndex(item => item.id === payload.id);
                payments[index] = payload

                const idx = state.paymentsList.findIndex(item => item.id === payload.id);
                state.paymentsList[idx] = payments[index]
                state.paymentsList = [...state.paymentsList]
            } else {
                payload.id = payments[payments.length - 1].id + 1
                payments.push(payload)
                state.paymentsPageCount = Math.ceil(payments.length / state.paymentsFetchSize)
                state.paymentsList = payments.slice(-1 * state.paymentsFetchSize)
            }

            state.analytics = initAnalytics()
        },
        removePayment(state, payload) {
            const index = payments.findIndex(item => item.id === payload);
            payments.splice(index, 1);

            state.paymentsPageCount = Math.ceil(payments.length / state.paymentsFetchSize)

            let start
            if(state.paymentsList[0].id === payload.id) {
                start = index;
            } else {
                start = payments.findIndex(item => item.id === state.paymentsList[0].id);
            }
            const end = start + state.paymentsFetchSize
            state.paymentsList = payments.slice(index, end)

            state.analytics = initAnalytics()
        }
    },
    getters: {
        getPayments: state => state.paymentsList,
        getPaymentsPageCount: state => state.paymentsPageCount
    },
    actions: {
        fetchData({commit}, page) {
            return new Promise((resolve) => {
                // имитируем работу с сетью, ставим задержку получения данных
                setTimeout(() => {
                    const start = page.size * page.number
                    const end = start + page.size
                    resolve(payments.slice(start, end))
                }, 200)
            }).then(res => {
                // запускаем изменение состояния через commit
                commit('setPaymentsListData', res)
            })
        }
    }
})


