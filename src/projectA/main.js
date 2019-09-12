import Vue from 'vue'
import App from '@/projectA/views/App.vue'
import '@/projectA/style/index.scss'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount("#app")