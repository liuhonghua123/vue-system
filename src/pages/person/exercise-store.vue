<template>
  <div class="pl-sidelayout-right">
    <!-- 筛选区 -->
    <div class="pl-card xp" style="padding-bottom:40px;">
      <div class="pl-title">
        <span class="pl-title-label">试题收藏</span>
      </div>

      <!-- 筛选区 -->
      <div class="pl-astable xfilter xnoborder">
        <div class="pl-astable-row">
          <div class="pl-astable-col xfilter-label" style="width:5em;">所属章节:</div>
          <div class="pl-astable-col">
            <el-input readonly size="medium" style="width:90%" placeholder="人教版>>六年级数学>>第三章"></el-input>
            <a class="pl-link" @click="sectionDialogVisible=true">选择</a>
          </div>
        </div>
        <div class="pl-astable-row">
          <div class="pl-astable-col xfilter-label" style="width:5em;">知识点:</div>
          <div class="pl-astable-col">
            <el-input readonly size="medium" style="width:90%" placeholder="有理数>>无理数"></el-input>
            <a class="pl-link" @click="knowledgeDialogVisible=true">选择</a>
          </div>
        </div>
        <div class="pl-astable-row">
          <div class="pl-astable-col xfilter-label" style="width:5em;">创建时间:</div>
          <div class="pl-astable-col">
            <!-- 日期控件用法详见:http://element.eleme.io/#/zh-CN/component/date-picker -->
            <el-date-picker
              size = "medium"
              v-model="dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
      </div>
      <!-- /筛选区 -->
    </div>

    <div class="pl-card xp" style="min-height:640px;">
      <div class="pl-title">
        <span class="pl-title-label xbold" style="line-height:40px;">共1.3万试题</span>
        <div class="pl-title-right">
          <label class="c-9">排序:</label>
          <a class="pl-link2">收藏时间</a>
        </div>
      </div>

      <!-- 试题列表 -->
      <div class="pl-questionlist">
        <!-- 题型:选择题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:单选题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
          </div>
        <pl-question-detail-select>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-select>
        <!-- 题型:选择题 -->

        <!-- 题型:填空题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:填空题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-fill>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-fill>
        <!-- /题型:填空题 -->

        <!-- 题型:判断题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:判断题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-judgment>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-judgment>
        <!-- /题型:判断题 -->

        <!-- 题型:简答题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:简答题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-shortanswer>
          <template slot="tools">

            <el-button size="medium">取消收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-shortanswer>
        <!-- /题型:简答题 -->

        <!-- 题型:听力题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:听力题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-select>
          <template slot="tools">

            <el-button size="medium">取消收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-select>
        <!-- /题型:听力题 -->

        <!-- 题型:跟读题 -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:跟读题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-voice>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-voice>
        <!-- /题型:跟读题 -->

        <!-- 题型:连线题  -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:连线题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-line>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-line>
        <!-- /题型:连线题  -->

        <!-- 题型:综合题  -->
        <div class="pl-questionprops">
          <div class="pl-questionprops-body">
            <span>题型:综合题</span>
            <span>专题:中考真题</span>
            <span>难度:中等</span>
            <span>来源:2017年长沙中学中考真题</span>
          </div>
        </div>
        <pl-question-detail-join>
          <template slot="tools">

            <el-button type="primary" size="medium">收藏</el-button>
            <el-button size="medium" type="info">选题</el-button>
          </template>
        </pl-question-detail-join>
        <!-- /题型:综合题  -->
      </div>
      <!-- /试题列表 -->

      <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
      <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
      </div>

    <!-- 试题篮 -->
    <pl-exercise-cart />
    <!-- /试题篮 -->

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
    name: 'plPersonExerciseStore',
    data() {
      return {
        sectionDialogVisible: false,
        knowledgeDialogVisible: false,
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
        }
      }
    }
  }
</script>
