import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(toast)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
