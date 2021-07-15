<template>
  <div class="context__menu__icon" @click="show">
    <svg class="context__menu__icon" enable-background="new 0 0 515.555 515.555" height="16" width="16"
         viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg">
      <path
          d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
      <path
          d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
      <path
          d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
    </svg>
    <div class="context__menu" v-show="isDisplayed" @mouseleave="hide">
      <div class="context__menu__item" @click="edit">Edit</div>
      <div class="context__menu__item" @click="remove">Remove</div>
    </div>
  </div>
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
      this.$router.push({name: 'addPayment', params: {category: this.category}, query: {id: this.id, value: this.value}})
          .catch(() => {});
    },
    remove() {
      this.$store.commit('removePayment', this.id)
    }
  }
}
</script>

<style scoped>

.context__menu__icon {
  position: relative;
}

.context__menu {
  position: absolute;
  border: none;
  background: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 8px 0px;
  z-index: 1;
}

.context__menu__item {
  padding: 12px;
}

.context__menu__item:hover {
  background-color: #e9e9e9;
}
</style>