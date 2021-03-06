import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {baseURL} from '../config/envConfig'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
