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
          <el-radio v-model="optionType" label="字母"></el-radio>
          <el-radio v-model="optionType" label="数字"></el-radio>
          <el-radio v-model="optionType" label="罗马数字"></el-radio>
        </div>
      </div>
    </div>
    <div class="pl-astable xquestion xeditor">
      <div class="pl-astable-col xquestion-label" style="width:4em;">选项：</div>
      <div class="pl-astable-col">
        <div class="pl-astable xoption">
          <div class="pl-astable-row" v-for="(opt, n) in options" :key="n">
            <div class="pl-astable-col xoption-label"><el-radio :label="n+optionType|numToLetter"></el-radio></div>
            <div class="pl-astable-col">
              <pl-question-editor v-model="opt.text"></pl-question-editor>
            </div>
            <div class="pl-astable-col xoption-tools">
              <a @click="becomePrev(n)"><i class="pl-ico xprev" :style="{visibility:n===0?'hidden':''}"></i></a>
              <a @click="becomeNext(n)"><i class="pl-ico xnext" :style="{visibility:n===options.length-1?'hidden':''}"></i></a>
              <a @click="deleteOption"><i class="pl-ico xdel"></i></a>
            </div>
          </div>
          <div class="pl-astable-row xbtnarea">
            <div class="pl-astable-col xoption-label"></div>
            <div class="pl-astable-col">
              <a class="pl-addoptionbtn"><i class="pl-ico xadd2"></i>增加选项</a>
            </div>
            <div class="pl-astable-col xoption-tools"></div>
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
    name: 'plQuestionSingle',
    components: {
    'plQuestionEditor': QuestionEditor
    },
    data() {
      return {
        optionType: '字母',
        options: [
          {
            text: '1'
          },
          {
            text: '2'
          },
          {
            text: '3'
          },
          {
            text: '4'
          }
        ]
      }
    },
    filters: {
      numToLetter (value) {
        let result
        const m = /^(\d*)(.*)$/g.exec(value)
        value = parseInt(m[1])

        m[2] === '字母' && (result=String.fromCharCode(65+value))
        m[2] === '数字' && (result=value+1)
        m[2] === '罗马数字' && (result=["I","II","III","IV","V","VI","VII","VIII","IX"][value])

        return result
      }
    },
    methods: {
      // 向前移动
      becomePrev (n) {
        const currentOption = this.options.splice(n, 1)
        this.options.splice(n-1, 0, currentOption[0])
      },
      // 向后移动
      becomeNext (n) {
        const currentOption = this.options.splice(n, 1)
        this.options.splice(n+1, 0, currentOption[0])
      },
      // 删除选项
      deleteOption (n) {
        this.options.splice(n, 1)
      }
    }
  }
</script>
