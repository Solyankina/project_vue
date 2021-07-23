import Vue from 'vue'
import App from './App.vue'
import modal from './plugins/ContextMenuPlugin'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

