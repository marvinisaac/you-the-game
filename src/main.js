import Vue from 'vue'
import App from './App/App.vue'
import './App/AppStyle.scss'
import Store from './App/Component/Store.js'

Vue.config.productionTip = false

new Vue({
    store: Store,
    render: h => h(App)
}).$mount('#app')
