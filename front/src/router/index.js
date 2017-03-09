import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import Hw010 from '@/components/Hw010'
import Hw022 from '@/components/Hw022'
import NotFound from '@/components/NotFound'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hw010',
      name: 'hw010_heading',
      component: Hw010
    },
    {
      path: '/hw022',
      name: 'hw022_heading',
      component: Hw022
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
