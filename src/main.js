import Vue from 'vue'
import App from './app/App.vue'
import './app/AppStyle.scss'
import store from './app/AppStore.js'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
