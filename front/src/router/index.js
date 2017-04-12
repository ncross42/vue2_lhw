import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
import axios from 'axios'
Vue.prototype.$http = axios

// import {VuePagination} from 'vue-pagination-2'
// Vue.use(VuePagination)

import Hw010 from '@/components/Hw010'
import Hw022 from '@/components/Hw022'
import Hw038 from '@/components/Hw038'
import Hw057 from '@/components/Hw057'
import Hw080 from '@/components/Hw080'
import Hw101 from '@/components/Hw101'
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
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import StoriesPage from '@/components/StoriesPage.vue'
import StoriesAll from '@/components/StoriesAll.vue'
import StoriesEdit from '@/components/StoriesEdit.vue'

const ROUTER_INSTANCE = new Router({
  mode: 'history',
  base: '/vue2_lhw',
  routes: [
    { path: '/', component: Hello, name: 'hello', meta: {title: 'hhheeelllooo'} },
    { path: '/hw010', component: Hw010, name: 'hw010' },
    { path: '/hw022', component: Hw022, name: 'hw022' },
    { path: '/hw038', component: Hw038, name: 'hw038' },
    { path: '/hw057', component: Hw057, name: 'hw057' },
    { path: '/hw080', component: Hw080, name: 'hw080' },
    { path: '/hw101', component: Hw101, name: 'hw101' },
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
      component: StoriesPage,
      children: [
        { path: '', component: StoriesAll, name: 'stories.all', meta: {title: 'all stories'} },
        { path: ':id/edit', component: StoriesEdit, name: 'stories.edit', meta: {title: 'edit stories'} }
      ]
    },
    { path: '*', component: NotFound, name: 'NotFound' }
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
