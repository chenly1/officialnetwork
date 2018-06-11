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


// 作品管理
import WorkSearch from '@/components/out/work/search.vue'
import WorkMangement from '@/components/out/work/mangement.vue'



// 出版管理
import PublishSearch from '@/components/out/publish/search.vue'
import PublishMangement from '@/components/out/publish/mangement.vue'

// 评论管理
import CommentSearch from '@/components/out/comment/search.vue'
import CommentMangement from '@/components/out/comment/mangement.vue'



// 展览管理
import ExhibitionSearch from '@/components/out/exhibition/search.vue'
import ExhibitionMangement from '@/components/out/exhibition/mangement.vue'


// 记事管理
import MemoSearch from '@/components/out/memo/search.vue'
import MemoMangement from '@/components/out/memo/mangement.vue'










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
      name: '概述管理',
      iconCls: 'fa fa-user', // 图标样式class
      children: [
        {
          path: '/user/mangement',
          component: UserMangement,
          redirect: '/user/search',
          name: '简介',
          children: [
            { path: '/user/search', component: UserSearch, name: '简介' }
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
          component: PrizeSearch,
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
          path: '/work/mangement',
          component: WorkMangement,
          redirect: '/work/search',
          name: '作品列表',
          children: [
            { path: '/work/search', component: WorkSearch, name: '作品列表' }
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
          path: '/publish/mangement',
          component: PublishMangement,
          redirect: '/publish/search',
          name: '出版列表',
          children: [
            { path: '/publish/search', component: PublishSearch, name: '出版列表' }
          ]
        },
        {
          path: '/comment/mangement',
          component: CommentMangement,
          redirect: '/comment/search',
          name: '评论管理',
          children: [
            { path: '/comment/search', component: CommentSearch, name: '评论列表' }
          ]
        },
        {
          path: '/exhibition/mangement',
          component: ExhibitionMangement,
          redirect: '/exhibition/search',
          name: '展览管理',
          children: [
            { path: '/exhibition/search', component: ExhibitionSearch, name: '展览列表' }
          ]
        }
      ]
    },
    {
      path: '/home',
      component: home,
      name: '记事管理',
      iconCls: 'fa fa-calendar', // 图标样式class
      children: [
        {
          path: '/memo/mangement',
          component: MemoMangement,
          redirect: '/memo/search',
          name: '记事',
          children: [
            { path: '/memo/search', component: MemoSearch, name: '记事列表' }
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
