import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(Resource)

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
// import food from '@/components/food'
import NotFound from '@/components/NotFound'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/hw010', component: Hw010 },
    { path: '/hw022', component: Hw022 },
    { path: '/hw038', component: Hw038 },
    { path: '/hw057', component: Hw057 },
    { path: '/hw080', component: Hw080 },
    { path: '/hw101', component: Hw101 },
    { path: '/p113', component: p113 },
    { path: '/p127', component: p127 },
    { path: '/p135', component: p135 },
    { path: '/p149', component: p149 },
    { path: '/p156', component: p156 },
    { path: '/p170', component: p170 },
    { path: '*', component: NotFound }
  ]
})
