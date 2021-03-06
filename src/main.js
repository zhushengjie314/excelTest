// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vheader from './test'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import XLSX from 'xlsx'
Vue.use(ElementUI)
Vue.use(XLSX)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Vheader },
  template: '<App/>'
})
