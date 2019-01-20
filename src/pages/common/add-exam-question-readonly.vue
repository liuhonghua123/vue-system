<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left">
          <!-- 试题属性 -->
          <div class="pl-card xsp">
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">试题属性</span>
            </div>

            <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
            <el-form class="xsmall" label-width="60px" size="medium">
              <el-form-item label="学段:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="科目:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="年级:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="学期:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="难度:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="共享:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="测试类型:">
               文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="能力层级:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="区分度:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
            </el-form>
          </div>
          <!-- /试题属性 -->

          <!-- 试题扩展属性 -->
          <div class="pl-card xsp">
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">试题扩展属性</span>
            </div>
            <el-form class="xsmall" label-width="60px" size="medium">
              <el-form-item label="教材版本:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="章节:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="知识点:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
              <el-form-item label="专题:">
                文本文本文本文本文本文本文本文本
              </el-form-item>
            </el-form>
          </div>
          <!-- /试题扩展属性 -->
        </div>
        <div class="pl-sidelayout-right">
          <!-- 试题信息 -->
          <div class="pl-card xp xfixedfooter" style="min-height:1100px;">
            <div class="pl-title">
              <span class="pl-title-label">试题信息</span>
            </div>
            <div>
              <!-- 开发使用的题型组件有可能要加一个alwaysShowAnswer属性，来控制总是显示答案， 具体查看components/question-details/select.vue -->
              <div class="pl-question-readonly">
                <pl-question-detail-select alwaysShowAnswer />
              </div>
            </div>
          </div>
          <!-- 试题信息 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plAddExamQuestion",
  data() {
    return {
      questionType: '单选题',
      data: [
        {
          name: '父选项1',
          children: [
            {
              name: '子选项1'
            }
          ]
        },
        {
          name: '父选项2',
          children: [
            {
              name: '子选项2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      sectionDialogVisible: false,
      knowledgeDialogVisible: false
    }
  },
};
</script>
