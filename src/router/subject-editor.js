import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/pages/admin/home'

// 个人中心相关路由
import Person from '@/pages/person/person'
import PersonInfo from '@/pages/person/info'
import PersonPassword from '@/pages/person/password'
import PersonPoints from '@/pages/person/points'
import PersonNotice from '@/pages/person/notice'
import PersonExercise from '@/pages/person/exercise'
import PersonExerciseStore from '@/pages/person/exercise-store'
import PersonExerciseCart from '@/pages/person/exercise-cart'
import PersonPaper from '@/pages/person/paper'
import PersonPaperStore from '@/pages/person/paper-store'
import PersonDownload from '@/pages/person/download'
import PersonDelete from '@/pages/person/delete'
import PersonAnswerCard from '@/pages/person/answer-card'

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
      path: '/person',
      component: Person,
      redirect: '/person/info',
      children: [
        {
          path: 'info',
          component: PersonInfo
        },
        {
          path: 'password',
          component: PersonPassword
        },
        {
          path: 'points',
          component: PersonPoints
        },
        {
          path: 'notice',
          component: PersonNotice
        },
        {
          path: 'exercise',
          component: PersonExercise
        },
        {
          path: 'exercise-store',
          component: PersonExerciseStore
        },
        {
          path: 'exercise-cart',
          component: PersonExerciseCart
        },
        {
          path: 'paper',
          component: PersonPaper
        },
        {
          path: 'paper-store',
          component: PersonPaperStore
        },
        {
          path: 'download',
          component: PersonDownload
        },
        {
          path: 'delete',
          component: PersonDelete
        },
        {
          path: 'answer-card',
          component: PersonAnswerCard
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
