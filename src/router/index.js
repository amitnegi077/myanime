import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../components/Content')
    },
    {
      name: 'watchlist',
      path: '/watchlist/',
      component: () => import('../components/Watchlist')
    }
  ]
})
