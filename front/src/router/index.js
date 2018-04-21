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

import p010 from '@/components/p010'
import p022 from '@/components/p022'
import p038 from '@/components/p038'
import p057 from '@/components/p057'
import p080 from '@/components/p080'
import p101 from '@/components/p101'
import p113 from '@/components/p113'
import p127 from '@/components/p127'
import p135 from '@/components/p135'
import p149 from '@/components/p149'
import p156 from '@/components/p156'
import p170 from '@/components/p170'
import p182 from '@/components/p182'
import p189 from '@/components/p189'
import p190 from '@/components/p190'
import p263 from '@/components/p263'
// import food from '@/components/food'
// import NotFound from '@/components/NotFound'
import Login from '@/components/Login'

const ROUTER_INSTANCE = new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Hello, name: 'hello', meta: {title: 'hhheeelllooo'} },
    { path: '/moviec', component: load('MovieC'), name: 'moviec' },
    { path: '/movier', component: load('MovieR'), name: 'movier', meta: {title: 'router call'} },
    { path: '/movies', component: load('Movies'), name: 'movies', meta: {title: 'asdf'} },
    { path: '/amovie', component: load('AjaxMovie'), name: 'amovie' },
    { path: '/amovies', component: load('AjaxMovies'), name: 'amovies' },
    { path: '/p010', component: p010, name: 'p010' },
    { path: '/p022', component: p022, name: 'p022' },
    { path: '/p038', component: p038, name: 'p038' },
    { path: '/p057', component: p057, name: 'p057' },
    { path: '/p080', component: p080, name: 'p080' },
    { path: '/p101', component: p101, name: 'p101' },
    { path: '/p113', component: p113, name: 'p113' },
    { path: '/p127', component: p127, name: 'p127' },
    { path: '/p135', component: p135, name: 'p135' },
    { path: '/p149', component: p149, name: 'p149' },
    { path: '/p156', component: p156, name: 'p156' },
    { path: '/p170', component: p170, name: 'p170' },
    { path: '/p182', component: p182, name: 'p182' },
    { path: '/p189', component: p189, name: 'p189' },
    { path: '/p190', component: p190, name: 'p190' },
    { path: '/p263', component: p263, name: 'p263' },
    { path: '/login', component: Login, name: 'login', meta: {title: 'lllogin'} },
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

// console.log(ROUTER_INSTANCE)

ROUTER_INSTANCE.beforeEach((to, from, next) => {
  document.title = to.meta.title || (to.name || 'A Vue Project')
  next()
})

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, { id: 'UA-97241089-1', ROUTER_INSTANCE })

export default ROUTER_INSTANCE
