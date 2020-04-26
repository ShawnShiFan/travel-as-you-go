import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store/store.js'

import VueResource from 'vue-resource'

Vue.use(iView)
Vue.use(VueResource)
Vue.prototype.$axios=axios
axios.defaults.withCredentials = false;

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
