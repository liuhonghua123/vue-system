<template>
  <div class="pl-sc">
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;">标题：</div>
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
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;"></div>
      <div class="pl-astable-col" style="width:220px;">
        <el-select v-model="questionType">
          <el-option value="单选题">单选题</el-option>
          <el-option value="填空题">填空题</el-option>
        </el-select>
      </div>
      <div class="pl-astable-col">
        <a class="pl-addoptionbtn" style="margin-top:0;" @click="addQuestion"><i class="pl-ico xadd2"></i>添加新试题</a>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;"></div>
      <div class="pl-astable-col">
        <div class="pl-question-join" v-for="(question,index) in questions" :key="index">
          <div class="pl-subtitle">
            <div class="pl-subtitle-left">
              <span class="pl-subtitle-text">{{question.type}}</span>
              <el-input style="width:60px;"></el-input>
              <span>分</span>
            </div>
            <div class="pl-subtitle-right">
              <a class="pl-link2" title="删除"><i class="pl-ico xdel"></i></a>
            </div>
          </div>
          <div class="pl-question-join-body">
            <pl-question-single v-if="question.type==='单选题'"></pl-question-single>
            <pl-question-fill v-if="question.type==='填空题'"></pl-question-fill>
          </div>
        </div>
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
    name: 'plQuestionListening',
    components: {
    'plQuestionEditor': QuestionEditor
    },
    data() {
      return {
        questionType: '单选题',
        questions: []
      }
    },
    methods: {
      addQuestion () {
        this.questions.push({
          type:this.questionType
        })
      }
    }
  }
</script>
