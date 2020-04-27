import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index';

Vue.config.productionTip = false
debugger
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
