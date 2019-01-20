<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <ul class="pl-crm">
        <li><router-link to="/exercise-store">试题库</router-link></li>
        <li><router-link to="/exercise-remove-duplication">试题排重</router-link></li>
        <li>详情</li>
      </ul>

      <div class="pl-twocolbox">
        <div class="pl-astable xtwocol">
          <div class="pl-astable-col">
            <div class="pl-title" style="margin-bottom:-1px;">
              <span class="pl-title-label">原题</span>
              <div class="pl-title-right">
                <el-button size="medium" type="primary" @click.native="editing=!editing">{{editing?'保存':'编辑'}}</el-button>
              </div>
            </div>

            <div v-pl-to-bottom="100">
              <!-- 题型:选择题 -->
              <template v-if="!editing">
                <div class="pl-questionprops">
                  <div class="pl-questionprops-body">
                    <span>题型:单选题</span>
                    <span>专题:中考真题</span>
                    <span>难度:中等</span>
                    <span>来源:2017年长沙中学中考真题</span>
                  </div>
                </div>
                <pl-question-detail-select />
              </template>
              <template v-else>
                <pl-question-single />
              </template>
              <!-- 题型:选择题 -->
            </div>
          </div>
          <div class="pl-astable-col">
            <div class="pl-title" style="margin-bottom:-1px;">
              <span class="pl-title-label">相似题 (1/5)</span>
              <div class="pl-title-right">
                <el-button size="medium">上一题</el-button>
                <el-button size="medium">下一题</el-button>
              </div>
            </div>

            <!-- 题型:选择题 -->
            <div class="pl-questionprops">
              <div class="pl-questionprops-body">
                <span>题型:单选题</span>
                <span>专题:中考真题</span>
                <span>难度:中等</span>
                <span>来源:2017年长沙中学中考真题</span>
              </div>
            </div>
            <pl-question-detail-select />
            <!-- 题型:选择题 -->
          </div>
        </div>

        <div class="pl-fixfooter">
          <el-button type="info">保留试题</el-button>
          <el-button>删除试题</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plRemoveDuplicationDetail',
    data() {
      return {
        editing: false
      }
    }
  }
</script>
