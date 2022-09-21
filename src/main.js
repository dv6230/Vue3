import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import "jquery"
import VueLoading from 'vuejs-loading-plugin'

Vue.config.productionTip = false

// using default options
Vue.use(VueLoading)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
