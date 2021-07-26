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
  </div>
</template>

<script>
import ContextMenu from './ContextMenu'

export default {
  name: "PaymentsDisplay",
  components: {
    ContextMenu
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    onClickMenuIcon(id) {
      this.$modal.showContextMenu(id)
    }
  }
}
</script>
<style scoped>
/*table {*/
/*  border-spacing: 0*/
/*}*/

/*th, td {*/
/*  padding-right: 48px;*/
/*  padding-bottom: 8px;*/
/*  padding-top: 8px;*/
/*  text-align: left;*/
/*  border-bottom: 1px solid black;*/
/*  border-right: none;*/
/*  border-left: none;*/
/*}*/

/*.context__menu__icon {*/
/*  position: relative;*/
/*}*/

</style>