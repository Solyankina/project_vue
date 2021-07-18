<template>
  <transition name="fade">
    <div class="context__menu" v-show="isDisplayed" @mouseleave="hide">
      <div class="context__menu__item" @click="edit">Edit</div>
      <div class="context__menu__item" @click="remove">Remove</div>
    </div>
  </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>