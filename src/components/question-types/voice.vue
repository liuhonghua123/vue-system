<template>
  <div class="pl-sc">
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;">标题：</div>
      <div class="pl-astable-col">
        <pl-question-editor showMenu minHeight="90px" style="margin-bottom:10px;"></pl-question-editor>
        <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button type="primary" size="medium">上传标准读音</el-button>
          <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
            <a class="pl-ico xtip"></a>
          </el-tooltip>
        </el-upload>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;">解析：</div>
      <div class="pl-astable-col">
        <pl-question-editor showMenu minHeight="90px" style="margin-bottom:10px;"></pl-question-editor>
        <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button type="primary" size="medium">添加附件</el-button>
          <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
            <a class="pl-ico xtip"></a>
          </el-tooltip>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
  import QuestionEditor from '@/components/question-editor'

  export default {
    name: 'plQuestionVoice',
    components: {
    'plQuestionEditor': QuestionEditor
    }
  }
</script>
