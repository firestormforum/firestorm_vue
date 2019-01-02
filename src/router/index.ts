import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default Router
