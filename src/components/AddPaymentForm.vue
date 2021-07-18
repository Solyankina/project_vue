<template>
  <div>
    <button @click="showForm" type="button">{{showButton.title}}</button>
    <div class="modal__window" v-show="showButton.value">
      <div class="popup-fade"></div>
      <div class="popup">
        <a class="popup-close" href="#" @click="close">Close</a>
        <form class="payment-form">
          <input placeholder="Date" type="text" v-model.trim="date"/><br>
          <input placeholder="Category" type="text" v-model.trim="category"/><br>
          <input placeholder="Amount" type="number" v-model.number="value"/><br>
          <button @click="save" type="button">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      id: this.$route.query.id,
      value: this.$route.query.value,
      category: this.$route.params.category,
      date: this.getCurrentDate(),
      showButton: {
        value: true,
        title: 'Add payment'
      }
    }
  },
  watch: {
    $route (to){
      this.category = to.params.category
      this.value = to.query.value
      this.id = to.query.id
      this.showForm()
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
    save() {
      const {id, date, value, category} = this
      const data = {id, date, category, value}
      console.log(data)
      this.$emit('addNewPayment', data)
    },
    close() {
      this.showButton.value = false
      this.$router.push({name: 'paymentList'})
          .then(() => {
            this.showButton.value = false
          })
          .catch(() => {
            this.showButton.value = false
          });

    },
    showForm() {
      this.showButton.value = !this.showButton.value || this.category
    }
  },
  created() {
    this.showForm()
  }
}
</script>

<style>
.popup-fade {
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 1;
}
.popup {
  position: fixed;
  top: 20%;
  left: 50%;
  padding: 20px;
  width: 360px;
  margin-left: -200px;
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  opacity: 1;
  z-index: 2;
}
.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>