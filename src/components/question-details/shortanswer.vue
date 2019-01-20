<template>
<div class="pl-questiondetail">
  <div class="pl-astable xqd">
    <div class="pl-astable-col xqd-no">1.</div>
    <div class="pl-astable-col">
      <div class="xqd-title">
        <span class="xqd-score">(2分)</span>
        <span class="xqd-title-text">试题标题内容。</span>
      </div>

      <pl-attachment></pl-attachment>

    </div>
  </div>
  <ul class="pl-pdanswer" v-if="hasAnswer && answerVisible">
    <li class="pl-pdanswer-result">正确答案: 答案内容</li>
    <li class="pl-pdanswer-body">答案解析:答案解析内容答案解析内容。</li>
    <pl-attachment></pl-attachment>
  </ul>
  <div class="pl-questiondetail-tools">
    <slot name="tools-front"></slot>
    <a class="pl-link" v-if="hasAnswer" @click="answerVisible=!answerVisible">{{answerVisible?'收起':'展开'}}解析</a>
    <slot name="tools"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'plQuestionDetailShortanswer',
  props: {
    hasAnswer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      answerVisible: false
    }
  }
}
</script>
