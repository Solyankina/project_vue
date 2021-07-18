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
          <div class="context__menu__icon" @click="onClickMenuIcon(item.id)">
            <svg class="context__menu__icon" enable-background="new 0 0 515.555 515.555" height="16" width="16"
                 viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
              <path
                  d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
              <path
                  d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
            </svg>
            <ContextMenu :id="item.id" :category="item.category" :value="item.value"/>
          </div>
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
  },
  methods: {
    onClickMenuIcon(id) {
      this.$modal.showContextMenu(id)
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

.context__menu__icon {
  position: relative;
}

</style>