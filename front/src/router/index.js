import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
import axios from 'axios'
Vue.prototype.$http = axios

// import food from '@/components/food'
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/components/${component}.vue`)
}
// import {VuePagination} from 'vue-pagination-2'
// Vue.use(VuePagination)

const ROUTER_INSTANCE = new Router({
  mode: 'history',
  base: '/vue2_lhw',
  routes: [
    { path: '/', component: Hello, name: 'hello', meta: {title: 'hhheeelllooo'} },
    { path: '/hw010', component: load('Hw010'), name: 'hw010' },
    { path: '/hw022', component: load('Hw022'), name: 'hw022' },
    { path: '/hw038', component: load('Hw038'), name: 'hw038' },
    { path: '/hw057', component: load('Hw057'), name: 'hw057' },
    { path: '/hw080', component: load('Hw080'), name: 'hw080' },
    { path: '/hw101', component: load('Hw101'), name: 'hw101' },
    { path: '/p113', component: load('p113'), name: 'p113' },
    { path: '/p127', component: load('p127'), name: 'p127' },
    { path: '/p135', component: load('p135'), name: 'p135' },
    { path: '/p149', component: load('p149'), name: 'p149' },
    { path: '/p156', component: load('p156'), name: 'p156' },
    { path: '/p170', component: load('p170'), name: 'p170' },
    { path: '/p182', component: load('p182'), name: 'p182' },
    { path: '/p189', component: load('p189'), name: 'p189' },
    { path: '/p190', component: load('p190'), name: 'p190' },
    { path: '/p263', component: load('p263'), name: 'p263' },
    { path: '/login', component: load('Login'), name: 'login', meta: {title: 'lllogin'} },
    {
      path: '/stories',
      name: 'stories',
      component: load('StoriesPage'),
      children: [
        { path: '', component: load('StoriesAll'), name: 'stories.all', meta: {title: 'all stories'} },
        { path: ':id/edit', component: load('StoriesEdit'), name: 'stories.edit', meta: {title: 'edit stories'} }
      ]
    },
    { path: '*', component: load('NotFound'), name: 'NotFound' }
  ]
})

console.log(ROUTER_INSTANCE)

ROUTER_INSTANCE.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue2_lhw'
  next()
})

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, { id: 'UA-97241089-1', ROUTER_INSTANCE })

export default ROUTER_INSTANCE
