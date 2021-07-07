<template>
  <div class="pagination__container">
    <div class="pagination">
      <a href="#" v-for="number in fetchPageCount" :key="number" @click="getPage(number)">{{ number }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Pagination",
  props: ['fetchPageSize', 'fetchPageCount'],

  methods: {
    ...mapActions([
      'fetchData'
    ]),

    getPage(number) {
      const page = {number: number - 1, size: this.fetchPageSize}
      this.fetchData(page)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.pagination__container {
  margin-left: 32px;
  /*display: flex;*/
  /*justify-content: space-around;*/
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  width: 284px;
  background-color: #FFFFFF;
  border: #cccccc;
  border-width: 1px;
  border-style: solid;
  padding: 12px 16px;
}

.pagination a {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #C4C4C4;
}

.pagination a:hover {
  color: #ef5b70;
}

.pagination a:active {
  color: #ef5b70;
}
</style>