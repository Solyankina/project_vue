<template>
    <div class="list">
        <table>
            <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Value</th>
                </tr>
            </thead>
            <tbody>
            <tr class="item" v-for="(item, idx) in items" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    }
}
</script>
<style scoped>
table {
  border-spacing: 0px
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