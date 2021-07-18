export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),

            showContextMenu(id) {
                this.EventBus.$emit('showContextMenu', { id })
            }
        }
    }
}
