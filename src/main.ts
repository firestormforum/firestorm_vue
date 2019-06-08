import Vue from 'vue'
import App from './App'
import router from './router'
import apolloProvider from './graphql/client'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  store,
  render: (h) => h(App)
}).$mount('#app')
