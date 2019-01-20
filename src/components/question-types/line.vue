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
      <div class="pl-astable-col xquestion-label" style="width:4em;">类型：</div>
      <div class="pl-astable-col">
        <div class="pl-radiobox">
          <el-radio label="字母"></el-radio>
          <el-radio label="数字"></el-radio>
          <el-radio label="罗马数字"></el-radio>
        </div>
      </div>
    </div>
    <div class="pl-astable xquestion xeditor">
      <div class="pl-astable-col xquestion-label" style="width:4em;">选项：</div>
      <div class="pl-astable-col">
        <div class="pl-linebox">
          <div class="pl-astable xline">
            <div class="pl-astable-row" v-if="n%2===1" v-for="n in 10" :key="n">
              <div class="pl-astable-col xline-label">{{n}}</div>
              <div class="pl-astable-col">
                <pl-question-editor></pl-question-editor>
              </div>
              <div class="pl-astable-col xline-label">{{n+1}}</div>
              <div class="pl-astable-col">
                <pl-question-editor></pl-question-editor>
              </div>
            </div>
          </div>
          <div class="pl-astable xline">
            <div class="pl-astable-row xline-tools">
              <div class="pl-astable-col xline-label"></div>
              <div class="pl-astable-col">
                <a class="pl-addoptionbtn"><i class="pl-ico xadd2"></i>增加行</a>
              </div>
              <div class="pl-astable-col xline-label"></div>
              <div class="pl-astable-col">
                <a class="pl-addoptionbtn xweeking"><i class="pl-ico xdel"></i>删除行</a>
              </div>
            </div>
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
    name: 'plQuestionLine',
    components: {
    'plQuestionEditor': QuestionEditor
    }
  }
</script>
