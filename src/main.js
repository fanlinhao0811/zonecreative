import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import api from './fetch/index'
import router from './router'

import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/css/swiper.min.css'
import "./css/style.css"

import jquery from 'jquery'

window.jquery = window.$ = jquery

Vue.use(BootstrapVue)

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
