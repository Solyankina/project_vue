<template>
  <v-row class="list pl-6" style="max-width: 1000px">
    <v-col cols="6">
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
    </v-col>
    <v-col cols="6">
      <VueApexCharts type="donut" :options="chartOptions" :series="series"></VueApexCharts>
    </v-col>
  </v-row>
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
      series: this.$store.state.analytics.map(a => a.data),
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: this.$store.state.analytics.map(a => a.category),
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
  watch: {
    items: function () {
      this.series = this.$store.state.analytics.map(a => a.data)
      this.chartOptions.labels = this.$store.state.analytics.map(a => a.category)
    }
  }
}
</script>
<style scoped>

</style>

