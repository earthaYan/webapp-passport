import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import pub from '../common/public'

Vue.prototype.pub=pub
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
