<template>
  <div class="list pl-6" style="max-width: 600px">
    <v-row>
      <v-col cols="auto">#</v-col>
      <v-col cols="3">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row class="item" v-for="item in items" :key="item.id" style="border-bottom: grey solid 1px">
      <v-col cols="auto">{{ item.id }}</v-col>
      <v-col cols="3">{{ item.date }}</v-col>
      <v-col cols="4">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1">
        <ContextMenu :id="item.id" :category="item.category" :value="item.value"/>
      </v-col>
    </v-row>
    <VueApexCharts type="donut" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>

<script>
import ContextMenu from './ContextMenu'
import VueApexCharts from "vue-apexcharts";

export default {
  name: "PaymentsDisplay",
  components: {
    ContextMenu,
    VueApexCharts
  },
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
}
</script>
<style scoped>
/*series: [{*/
/*  name: 'series-1',*/
/*  data: [30, 40, 45, 50, 49, 60, 70, 91]*/
/*}]*/
</style>

