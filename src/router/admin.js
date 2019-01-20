import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/pages/admin/home'

// 系统管理相关路由
import System from '@/pages/system/system'
import SystemUser from '@/pages/system/user'
import SystemRole from '@/pages/system/role'
import SystemTemplate from '@/pages/system/template'
import SystemNotice from '@/pages/system/notice'
import SystemDictionary from '@/pages/system/dictionary'
import SystemKnowledge from '@/pages/system/knowledge'
import SystemBook from '@/pages/system/book'
import SystemPoints from '@/pages/system/points'

// 试题相关路由
import ExerciseStore from '@/pages/exercise/store'
import ExerciseFirstCheck from '@/pages/exercise/first-check'
import ExerciseFinalCheck from '@/pages/exercise/final-check'
import ExerciseRemoveDuplication from '@/pages/exercise/remove-duplication'
import ExerciseRemoveDuplicationDetail from '@/pages/exercise/remove-duplication-detail'

// 试卷相关路由
import TestpaperStore from '@/pages/testpaper/store'
import TestpaperFirstCheck from '@/pages/testpaper/first-check'
import TestpaperFinalCheck from '@/pages/testpaper/final-check'
import TestpaperCustom from '@/pages/testpaper/custom'

// 公用路由
import GroupPaperAuto from '@/pages/common/group-paper-auto'
import Page404 from '@/pages/common/404'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/system',
      component: System,
      redirect: '/system/user',
      children: [
        {
          path: 'user',
          component: SystemUser
        },
        {
          path: 'role',
          component: SystemRole
        },
        {
          path: 'template',
          component: SystemTemplate
        },
        {
          path: 'notice',
          component: SystemNotice
        },
        {
          path: 'dictionary',
          component: SystemDictionary
        },
        {
          path: 'knowledge',
          component: SystemKnowledge
        },
        {
          path: 'book',
          component: SystemBook
        },
        {
          path: 'points',
          component: SystemPoints
        }
      ]
    },
    {
      path: '/exercise',
      redirect: '/exercise-store'
    },
    {
      path: '/exercise-store',
      component: ExerciseStore
    },
    {
      path: '/exercise-first-check',
      component: ExerciseFirstCheck
    },
    {
      path: '/exercise-final-check',
      component: ExerciseFinalCheck
    },
    {
      path: '/exercise-remove-duplication',
      component: ExerciseRemoveDuplication
    },
    {
      path: '/exercise-remove-duplication-detail',
      component: ExerciseRemoveDuplicationDetail
    },
    {
      path: '/testpaper-store',
      component: TestpaperStore
    },
    {
      path: '/testpaper-first-check',
      component: TestpaperFirstCheck
    },
    {
      path: '/testpaper-final-check',
      component: TestpaperFinalCheck
    },
    {
      path: '/testpaper-custom',
      component: TestpaperCustom
    },
    {
      path: '/group-paper-auto',
      name: 'groupPaperAuto',
      component: GroupPaperAuto
    },
    {
      path:'*',
      component: Page404
    }
  ]
})
