import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/common.less'
import { Lazyload } from 'vant'
import { Toast } from 'vant'

Vue.prototype.$toast = Toast

Vue.use(Lazyload, {
  loading: require('./assets/images/loading.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
