<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <router-view @addNewPayment="addNewPaymentData"/>
      <br />
      <PaymentsDisplay :items="getPayments"/>
      <br/>
      <Pagination :fetchPageSize="fetchPageSize" :fetchPageCount="getPaymentsPageCount" />
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import Pagination from './components/Pagination.vue'
import store from './store'
import { mapActions, mapGetters } from 'vuex'
import router from './router'

export default {
  name: 'App',
  store,
  router,
  components: {
    PaymentsDisplay,
    Pagination
  },
  data() {
    return {
      fetchPageSize: 10
    }
  },
  methods: {
    addNewPaymentData(value) {
      this.$store.commit('addPayment', value)
    },

    ...mapActions([
      'fetchData'
    ])
  },
  computed: {
    ...mapGetters([
      'getPayments',
      'getPaymentsPageCount'
    ])
  },
  mounted() {
    if (!this.getPayments.length) {
      const page = {number: 0, size: this.fetchPageSize}
      this.fetchData(page)
      this.$store.commit('setPaymentsPageCount', this.fetchPageSize)
    }
  }

}
</script>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
}
</style>
