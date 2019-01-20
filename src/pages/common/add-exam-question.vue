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
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="小学" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="科目:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="语文" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="年级:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="一年级" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学期:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="2018上学期" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="难度:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="难" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="共享:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="公开" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="测试类型:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="类型1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="能力层级:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="层级1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="区分度:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="区分度1" value="1"></el-option>
                </el-select>
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
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="人教版" value="1"></el-option>
                </el-select>
              </el-form-item>
              <div class="pl-tagbox">
                <div class="pl-tagbox-title"><a class="pl-link" @click="sectionDialogVisible=true">选择章节</a></div>
                <div class="pl-tagbox-body">
                  <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>章节1</span>
                </div>
              </div>
              <div class="pl-tagbox">
                <div class="pl-tagbox-title"><a class="pl-link" @click="knowledgeDialogVisible=true">选择知识点</a></div>
                <div class="pl-tagbox-body">
                  <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>知识点1</span>
                </div>
              </div>
              <div class="pl-tagbox">
                <div class="pl-tagbox-title c-6">关键字(空格分隔)</div>
                <el-input type="textarea"></el-input>
              </div>
              <el-form-item label="选择专题:">
                <el-select style="width:100%;" placeholder="请选择">
                  <el-option label="专题1" value="1"></el-option>
                </el-select>
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
              <div class="pl-astable xquestion">
                <div class="pl-astable-col xquestion-label" style="width:4em;">题型：</div>
                <div class="pl-astable-col">
                  <div class="pl-radiobox">
                    <el-radio label="单选题" v-model="questionType"></el-radio>
                    <el-radio label="多选题" v-model="questionType"></el-radio>
                    <el-radio label="判断题" v-model="questionType"></el-radio>
                    <el-radio label="填空题" v-model="questionType"></el-radio>
                    <el-radio label="简答题" v-model="questionType"></el-radio>
                    <el-radio label="听力题" v-model="questionType"></el-radio>
                    <el-radio label="综合题" v-model="questionType"></el-radio>
                    <el-radio label="连线题" v-model="questionType"></el-radio>
                    <el-radio label="跟读题" v-model="questionType"></el-radio>
                  </div>
                </div>
                <div class="pl-astable-col xquestion-right" style="width:90px;">
                  <el-input value="2" style="width:55px;"></el-input>
                  <span>分</span>
                </div>
              </div>
              <div class="pl-questionbox">
                <pl-question-single v-if="questionType==='单选题'"></pl-question-single>
                <pl-question-multiple v-if="questionType==='多选题'"></pl-question-multiple>
                <pl-question-judgment v-if="questionType==='判断题'"></pl-question-judgment>
                <pl-question-fill v-if="questionType==='填空题'"></pl-question-fill>
                <pl-question-short-Answer v-if="questionType==='简答题'"></pl-question-short-Answer>
                <pl-question-listening v-if="questionType==='听力题'"></pl-question-listening>
                <pl-question-join v-if="questionType==='综合题'"></pl-question-join>
                <pl-question-line v-if="questionType==='连线题'"></pl-question-line>
                <pl-question-voice v-if="questionType==='跟读题'"></pl-question-voice>
              </div>
            </div>
            <div class="pl-fixfooter" v-pl-sticky:bottom="80">
              <el-button type="info">保存并继续</el-button>
              <el-button type="info">提交审批</el-button>
              <el-button type="info">清空</el-button>
              <el-button type="info">取消</el-button>
            </div>
          </div>
          <!-- 试题信息 -->
        </div>
      </div>
    </div>

    <!-- 弹窗:选择章节 -->
    <el-dialog title="选择章节" :visible.sync="sectionDialogVisible" width="480px">
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
        <el-button size="medium" @click="sectionDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="sectionDialogVisible = false">选 择</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:选择章节 -->

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
