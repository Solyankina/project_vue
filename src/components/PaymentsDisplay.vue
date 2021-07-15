<template>
  <div class="list">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="item" v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
        <td>
          <ContextMenu :id="item.id" :category="item.category" :value="item.value"/>
        </td>
      </tr>
      </tbody>
    </table>

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
  }
}
</script>
<style scoped>
table {
  border-spacing: 0
}

th, td {
  padding-right: 48px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: left;
  border-bottom: 1px solid black;
  border-right: none;
  border-left: none;
}


</style>