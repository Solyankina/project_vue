<template>
  <div style="max-width: 600px">
    <v-pagination @input="fetchPage" v-model="page" :length="fetchPageCount" flat></v-pagination>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Pagination",
  props: ['fetchPageSize', 'fetchPageCount'],
  data() {
    return {
      page: 1
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),

    fetchPage(number) {
      const page = {number: number - 1, size: this.fetchPageSize}
      this.fetchData(page)
    }
  }
}
</script>

<style scoped>

</style>