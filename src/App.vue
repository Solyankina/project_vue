<template>
  <v-app>
    <v-main>
      <div class="text-h5 text-md-3 pb-4 pt-6 pl-6">My personal costs</div>
      <router-view @addNewPayment="addNewPaymentData"/>
      <br />
      <PaymentsDisplay :items="getPayments"/>
      <br/>
      <Pagination :fetchPageSize="fetchPageSize" :fetchPageCount="getPaymentsPageCount" />
    </v-main>
  </v-app>
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
      fetchPageSize: 8
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
