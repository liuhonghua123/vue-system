<template>
<div class="pl-questiondetail">
  <div class="pl-astable xqd">
    <div class="pl-astable-col xqd-no">1.</div>
    <div class="pl-astable-col">
      <div class="xqd-title">
        <span class="xqd-score">(2分)</span>
        <span class="xqd-title-text">试题标题内容?</span>
      </div>

      <pl-attachment></pl-attachment>

      <div class="xqd-body">
        <ul class="pl-astable xod">
          <li class="pl-astable-row">
            <label class="pl-astable-col xod-no">A.</label>
            <div class="pl-astable-col xod-body">选项内容。</div>
          </li>
          <li class="pl-astable-row">
            <label class="pl-astable-col xod-no">B.</label>
            <div class="pl-astable-col xod-body">选项内容。</div>
          </li>
          <li class="pl-astable-row">
            <label class="pl-astable-col xod-no">C.</label>
            <div class="pl-astable-col xod-body">选项内容。</div>
          </li>
          <li class="pl-astable-row">
            <label class="pl-astable-col xod-no">D.</label>
            <div class="pl-astable-col xod-body">选项内容。</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul class="pl-pdanswer" v-if="alwaysShowAnswer || (hasAnswer && answerVisible)">
    <li class="pl-pdanswer-result">正确答案: C</li>
    <li class="pl-pdanswer-body">答案解析:答案解析内容答案解析内容。</li>
    <pl-attachment></pl-attachment>
  </ul>
  <div class="pl-questiondetail-tools" v-if="!alwaysShowAnswer">
    <slot name="tools-front"></slot>
    <a class="pl-link" v-if="hasAnswer" @click="answerVisible=!answerVisible">{{answerVisible?'收起':'展开'}}解析</a>
    <slot name="tools"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'plQuestionDetailSelect',
  props: {
    alwaysShowAnswer: {
      type: Boolean,
      default: false
    },
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
