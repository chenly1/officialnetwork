import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Index'
import Summary from '@/components/main/Summary'
import Works from '@/components/main/Works'
import Media from '@/components/main/Media'
import Memo from '@/components/main/Memo'
import Contact from '@/components/main/Contact'
import bottomMenu from '@/components/main/bottomMenu'
import commentView from '@/components/main/commentView'
import workView from '@/components/main/workView'
import login from '@/components/out/login'
import home from '@/components/out/Home'

// 用户管理
import UserSearch from '@/components/out/user/search.vue'
import UserMangement from '@/components/out/user/mangement.vue'
// 儿童管理
import ChildrenSearch from '@/components/out/children/search.vue'
import ChildrenMangement from '@/components/out/children/mangement.vue'

// 奖项管理
import PrizeSearch from '@/components/out/prize/search.vue'
import PrizeMangement from '@/components/out/prize/mangement.vue'












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
    },
    {
      path: '/bottomMenu',
      name: 'bottomMenu',
      component: bottomMenu
    },
    {
      path: '/media/commentView/:id',
      name: 'commentView',
      component: commentView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/works/workView/:id',
      name: 'WorkView',
      component: workView
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      component: home,
      name: '概述',
      iconCls: 'fa fa-user', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简述',
          children: [
            { path: '/user/search', component: UserSearch, name: '简述' }
          ]
        },
        {
          path: '/children/mangement',
          component: ChildrenMangement,
          redirect: '/children/search',
          name: '职员信息',
          children: [
            { path: '/children/search', component: ChildrenSearch, name: '职员信息' }
          ]
        },
        {
          path: '/prize/mangement',
          component: PrizeMangement,
          redirect: '/prize/search',
          name: '奖项列表',
          children: [
            { path: '/prize/search', component: ChildrenSearch, name: '奖项' }
          ]
        }
      ]
    },
    {
      path: '/home',
      component: home,
      name: '作品管理',
      iconCls: 'fa fa-cubes', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简述',
          children: [
            { path: '/user/search', component: UserSearch, name: '简述' }
          ]
        },
        {
          path: '/children/mangement',
          component: ChildrenMangement,
          redirect: '/children/search',
          name: '职员信息',
          children: [
            { path: '/children/search', component: ChildrenSearch, name: '职员信息' }
          ]
        },
        {
          path: '/prize/mangement',
          component: PrizeMangement,
          redirect: '/prize/search',
          name: '奖项列表',
          children: [
            { path: '/prize/search', component: ChildrenSearch, name: '奖项' }
          ]
        }
      ]
    },
    {
      path: '/home',
      component: home,
      name: '媒体管理',
      iconCls: 'fa fa-camera', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简述',
          children: [
            { path: '/user/search', component: UserSearch, name: '简述' }
          ]
        },
        {
          path: '/children/mangement',
          component: ChildrenMangement,
          redirect: '/children/search',
          name: '职员信息',
          children: [
            { path: '/children/search', component: ChildrenSearch, name: '职员信息' }
          ]
        },
        {
          path: '/prize/mangement',
          component: PrizeMangement,
          redirect: '/prize/search',
          name: '奖项列表',
          children: [
            { path: '/prize/search', component: ChildrenSearch, name: '奖项' }
          ]
        }
      ]
    },
    {
      path: '/home',
      component: home,
      name: '记事',
      iconCls: 'fa fa-calendar', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简述',
          children: [
            { path: '/user/search', component: UserSearch, name: '简述' }
          ]
        },
        {
          path: '/children/mangement',
          component: ChildrenMangement,
          redirect: '/children/search',
          name: '职员信息',
          children: [
            { path: '/children/search', component: ChildrenSearch, name: '职员信息' }
          ]
        },
        {
          path: '/prize/mangement',
          component: PrizeMangement,
          redirect: '/prize/search',
          name: '奖项列表',
          children: [
            { path: '/prize/search', component: ChildrenSearch, name: '奖项' }
          ]
        }
      ]
    },
    {
      path: '/home',
      component: home,
      name: '联系管理',
      iconCls: 'fa fa-address-card-o', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简述',
          children: [
            { path: '/user/search', component: UserSearch, name: '简述' }
          ]
        },
        {
          path: '/children/mangement',
          component: ChildrenMangement,
          redirect: '/children/search',
          name: '职员信息',
          children: [
            { path: '/children/search', component: ChildrenSearch, name: '职员信息' }
          ]
        },
        {
          path: '/prize/mangement',
          component: PrizeMangement,
          redirect: '/prize/search',
          name: '奖项列表',
          children: [
            { path: '/prize/search', component: ChildrenSearch, name: '奖项' }
          ]
        }
      ]
    },
  ]
})
