import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.use(VCalendar, {
  componentPrefix: 'v'
})
