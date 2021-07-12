<template>
  <div>
    <button @click="toggleForm" type="button">{{toggleButton.title}}</button>
    <form class="payment-form" v-show="toggleButton.value">
      <input placeholder="Date" type="text" v-model.trim="date"/>
      <input placeholder="Category" type="text" v-model.trim="category"/>
      <input placeholder="Amount" type="number" v-model.number="value"/>
      <button @click="onClick" type="button">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: this.$route.query.value,
      category: this.$route.params.category,
      date: this.getCurrentDate(),
      toggleButton: {
        value: true,
        title: ''
      }
    }
  },
  methods: {
    getCurrentDate() {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    onClick() {
      const {date, value, category} = this
      const data = {date, category, value}
      console.log(data)
      this.$emit('addNewPayment', data)
    },
    toggleForm() {
      this.toggleButton.value = !this.toggleButton.value || this.category
      if(this.toggleButton.value) {
        this.toggleButton.title = 'Скрыть форму'
      } else {
        this.toggleButton.title = 'Отобразить форму'
      }
    }
  },
  created() {
    this.toggleForm()
  }
}
</script>

<style>

</style>