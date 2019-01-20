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

      <div class="pl-linebox">
        <div class="pl-astable xline">
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <ul class="pl-pdanswer" v-if="hasAnswer && answerVisible">
    <li class="pl-pdanswer-result">
      正确答案:
      <div class="pl-linebox">
        <div class="pl-astable xline">
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
          <div class="pl-astable-row">
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
            <div class="pl-astable-col xline-label">A.</div>
            <div class="pl-astable-col">
              <div class="pl-qeditor">
                <div class="pl-qeditor-body">选项内容</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
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
  name: 'plQuestionDetailLine',
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
