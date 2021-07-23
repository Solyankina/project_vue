<template>
  <div class="pl-6">
      <v-btn color="teal" dark @click="showForm" type="button">{{showButton.title}}<v-icon>mdi-plus</v-icon></v-btn>
      <v-dialog class="modal__window" v-model="showButton.value" width="500">
        <v-card class="pt-8">
          <v-form class="payment-form">
            <v-text-field label="Date" v-model.trim="date" outlined class="mx-4"></v-text-field><br>
            <v-text-field label="Category" v-model.trim="category" outlined class="mx-4"></v-text-field><br>
            <v-text-field label="Amount" v-model.number="value" outlined class="mx-4"></v-text-field><br>
            <v-btn @click="save" outlined color="indigo" small class="ml-4 mb-4">Save</v-btn>

          </v-form>
        </v-card>
      </v-dialog>
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
/*.popup-fade {*/
/*  background: #000;*/
/*  position: fixed;*/
/*  left: 0;*/
/*  top: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  opacity: 0.7;*/
/*  z-index: 1;*/
/*}*/
/*.popup {*/
/*  position: fixed;*/
/*  top: 20%;*/
/*  left: 50%;*/
/*  padding: 20px;*/
/*  width: 360px;*/
/*  margin-left: -200px;*/
/*  background: #fff;*/
/*  border: 1px solid;*/
/*  border-radius: 4px;*/
/*  opacity: 1;*/
/*  z-index: 2;*/
/*}*/
/*.popup-close {*/
/*  position: absolute;*/
/*  top: 10px;*/
/*  right: 10px;*/
/*}*/
</style>