import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/pages/teacher/home'

// 试卷相关路由
import TestpaperStore from '@/pages/testpaper/store'
import GroupPaperManually from '@/pages/testpaper/group-paper-manually'

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

// 公用路由
import Template from '@/pages/common/template'
import Artical from '@/pages/common/artical'
import AddExamQuestion from '@/pages/common/add-exam-question'
import AddExamQuestionReadOnly from '@/pages/common/add-exam-question-readonly'
import GroupPaperAuto from '@/pages/common/group-paper-auto'
import PaperDetail from '@/pages/common/paper-detail'
import Page404 from '@/pages/common/404'
import AnswerCard from '@/pages/common/answer-card'
import ImportPaper from '@/pages/common/import-paper'
import ImportQuestions from '@/pages/common/import-questions'

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
      path: '/testpaper-store',
      component: TestpaperStore
    },
    {
      path: '/group-paper-manually',
      component: GroupPaperManually
    },
    {
      path: '/template',
      component: Template
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
      path: '/artical',
      name: 'artical',
      component: Artical
    },
    {
      path: '/add-exam-question',
      name: 'addExamQuestion',
      component: AddExamQuestion
    },
    {
      path: '/add-exam-question-readonly',
      component: AddExamQuestionReadOnly
    },
    {
      path: '/group-paper-auto',
      name: 'groupPaperAuto',
      component: GroupPaperAuto
    },
    {
      path: '/paper-detail',
      name: 'paperDetail',
      component: PaperDetail
    },
    {
      path: '/answer-card',
      component: AnswerCard
    },
    {
      path: '/import-paper',
      component: ImportPaper
    },
    {
      path: '/import-questions',
      component: ImportQuestions
    },
    {
      path:'*',
      component: Page404
    }
  ]
})
