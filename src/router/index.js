import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pages from '@/components/Pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages,
    },
    {
      path: '/pages/:id',
      name: 'Pages',
      component: Pages,
    },
  ],
})
