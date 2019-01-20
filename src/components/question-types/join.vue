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
            <pl-question-multiple v-if="question.type==='多选题'"></pl-question-multiple>
            <pl-question-judgment v-if="question.type==='判断题'"></pl-question-judgment>
            <pl-question-fill v-if="question.type==='填空题'"></pl-question-fill>
            <pl-question-short-answer v-if="question.type==='简答题'"></pl-question-short-answer>
            <pl-question-listening v-if="question.type==='听力题'"></pl-question-listening>
            <pl-question-line v-if="question.type==='连线题'"></pl-question-line>
            <pl-question-voice v-if="question.type==='跟读题'"></pl-question-voice>
          </div>
          <div class="pl-astable xquestion">
            <div class="pl-astable-col xquestion-label" style="width: 4em;">知识点：</div>
            <div class="pl-astable-col">
              <div class="pl-tagbox">
                <div class="pl-tagbox-title"><a class="pl-link" @click="knowledgeDialogVisible=true">选择知识点</a></div>
                <div class="pl-tagbox-body">
                  <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>知识点1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;"></div>
      <div class="pl-astable-col" style="width:220px;">
        <el-select v-model="questionType">
          <el-option value="单选题">单选题</el-option>
          <el-option value="多选题">多选题</el-option>
          <el-option value="判断题">判断题</el-option>
          <el-option value="填空题">填空题</el-option>
          <el-option value="简答题">简答题</el-option>
          <el-option value="听力题">听力题</el-option>
          <el-option value="连线题">连线题</el-option>
          <el-option value="跟读题">跟读题</el-option>
        </el-select>
      </div>
      <div class="pl-astable-col">
        <a class="pl-addoptionbtn" style="margin-top:0;" @click="addQuestion"><i class="pl-ico xadd2"></i>添加新试题</a>
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

    <!-- 弹窗:选择知识点 -->
    <el-dialog title="选择知识点" :visible.sync="knowledgeDialogVisible" width="480px">
      <div class="pl-dialogbody">
        <div class="pl-searchinput">
          <el-input size="medium"></el-input>
          <i class="el-icon-search"></i>
        </div>
        <div class="pl-treebox xschool">
          <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
          <el-tree :data="data" :props="defaultProps"></el-tree>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="knowledgeDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="knowledgeDialogVisible = false">选 择</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:选择知识点 -->
  </div>
</template>

<script>
  import QuestionEditor from '@/components/question-editor'

  export default {
    name: 'plQuestionJoin',
    data() {
      return {
        questionType: '单选题',
        questions: [],
        knowledgeDialogVisible: false
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
