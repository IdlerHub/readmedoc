import Vue from 'vue'
import VueRouter from 'vue-router'
import HelpHome from '../views/HelpHome'
import ReadMe from '../views/ReadMe'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HelpHome',
    component: HelpHome
  },
  {
    path: '/readme',
    name: 'ReadMe',
    component: ReadMe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
