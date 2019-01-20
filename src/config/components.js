// 注册通用的全局组件
import Vue from 'vue'
import SideFloat from '@/components/side-float'
import Attachment from '@/components/attachment'
import ExerciseCart from '@/components/exercise-cart'
import NoData from '@/components/no-data'

// 试题
import QuestionSingle from '@/components/question-types/single'
import QuestionMultiple from '@/components/question-types/multiple'
import QuestionJudgment from '@/components/question-types/judgment'
import QuestionFill from '@/components/question-types/fill'
import QuestionShortAnswer from '@/components/question-types/shortanswer'
import QuestionListening from '@/components/question-types/listening'
import QuestionJoin from '@/components/question-types/join'
import QuestionLine from '@/components/question-types/line'
import QuestionVoice from '@/components/question-types/voice'

// 试题-详情
import QuestionDetailSelect from '@/components/question-details/select'
import QuestionDetailJudgment from '@/components/question-details/judgment'
import QuestionDetailFill from '@/components/question-details/fill'
import QuestionDetailShortAnswer from '@/components/question-details/shortanswer'
import QuestionDetailJoin from '@/components/question-details/join'
import QuestionDetailLine from '@/components/question-details/line'
import QuestionDetailVoice from '@/components/question-details/voice'

const components = [
  SideFloat,
  Attachment,
  ExerciseCart,
  NoData,
  QuestionSingle,
  QuestionMultiple,
  QuestionJudgment,
  QuestionFill,
  QuestionShortAnswer,
  QuestionListening,
  QuestionJoin,
  QuestionLine,
  QuestionVoice,
  QuestionDetailSelect,
  QuestionDetailJudgment,
  QuestionDetailFill,
  QuestionDetailShortAnswer,
  QuestionDetailJoin,
  QuestionDetailLine,
  QuestionDetailVoice
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
