import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/Index'
import Summary from '@/components/main/Summary'
import Works from '@/components/main/Works'
import Media from '@/components/main/Media'
import Memo from '@/components/main/Memo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/memo',
      name: 'Memo',
      component: Memo
    }
  ]
})
