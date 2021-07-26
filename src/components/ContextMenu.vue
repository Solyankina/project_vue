<template>
  <v-menu v-model="isDisplayed" bottom offset-y>
    <template v-slot:activator="{ on }">
      <svg v-on="on" class="context__menu__icon" enable-background="new 0 0 515.555 515.555" height="16" width="16"
           viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
        <path
            d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
        <path
            d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
      </svg>
    </template>
    <v-list>
      <v-list-item @click="edit">edit</v-list-item>
      <v-list-item @click="remove">remove</v-list-item>
    </v-list>
  </v-menu>
</template>

<script>

export default {
  name: "ContextMenu",
  data() {
    return {
      isDisplayed: false
    }
  },
  props: ['id', 'category', 'value'],

  methods: {
    show() {
      this.isDisplayed = true
    },
    hide() {
      this.isDisplayed = false
    },
    edit() {
      this.$router.push({
        name: 'addPayment',
        params: {category: this.category},
        query: {id: this.id, value: this.value}
      })
          .catch(() => {
          });
    },
    remove() {
      this.$store.commit('removePayment', this.id)
    },
    onShown(settings) {
      if (settings.id === this.id) {
        this.show()
      }
    }
  },
  mounted() {
    this.$modal.EventBus.$on('showContextMenu', this.onShown)
  }
}
</script>

<style scoped>

</style>