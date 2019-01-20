<template>
    <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left" v-pl-sticky="192">
          <div class="pl-card xsave" v-pl-to-bottom.fixed="20">
            <div class="pl-bgbox2">
              <el-radio-group v-model="activeTab">
                <el-radio-button label="1">章节</el-radio-button>
                <el-radio-button label="2">知识点</el-radio-button>
              </el-radio-group>
            </div>
            <div v-if="activeTab==='1'">
              <div class="pl-searchinput">
                <el-input size="small" placeholder="请输入章节"></el-input>
                <i class="el-icon-search"></i>
              </div>
              <div class="pl-treebox xschool">
                <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
                <el-tree :data="data" :props="defaultProps" show-checkbox></el-tree>
              </div>
            </div>
            <div v-if="activeTab==='2'">
              <div class="pl-searchinput">
                <el-input size="small" placeholder="请输入知识点"></el-input>
                <i class="el-icon-search"></i>
              </div>
              <div class="pl-treebox xschool">
                <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
                <el-tree :data="data" :props="defaultProps" show-checkbox></el-tree>
              </div>
            </div>
          </div>
        </div>
        <div class="pl-sidelayout-right">
          <!-- 筛选区 -->
          <div class="pl-card xp">
            <div class="pl-title">
              <span class="pl-title-label">试题库</span>
            </div>
            <div class="pl-astable xfilter">
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">状态:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">全部</a>
                  <a class="pl-tag">发布</a>
                  <a class="pl-tag">审核不通过</a>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">试卷类型:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">全部</a>
                  <a class="pl-tag">单元测试</a>
                  <a class="pl-tag">月考</a>
                  <a class="pl-tag">其中考试</a>
                  <a class="pl-tag">期末考试</a>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">难度:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">容易</a>
                  <a class="pl-tag">中等</a>
                  <a class="pl-tag">困难</a>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">专题:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">全部</a>
                  <a class="pl-tag">专题1</a>
                  <a class="pl-tag">专题2</a>
                  <a class="pl-tag">专题3</a>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">能力层级:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">全部</a>
                  <a class="pl-tag">层级1</a>
                  <a class="pl-tag">层级2</a>
                  <a class="pl-tag">层级3</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 筛选区 -->

          <div class="pl-card xp" style="min-height:640px;">
            <div class="pl-title">
              <span class="pl-title-label xbold" style="line-height:40px;">共1.3万试题</span>
              <div class="pl-title-right">
                <label class="c-9">排序:</label>
                <a class="pl-link2 xactive">最新</a>
                <a class="pl-link2">组卷次数</a>
                <a class="pl-link2">真题次数</a>
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
      </div>
    </div>

    <!-- 弹窗:试题初审 -->
    <el-dialog title="试题初审" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="初审人:">试题初审</el-form-item>
          <el-form-item label="初审意见:">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="初审时间:">2018-04-04 00:00</el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button size="medium" @click="dialogVisible = false">不通过</el-button>
        <el-button size="medium" type="info" @click="dialogVisible = false">通 过</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:试题初审 -->
  </div>
</template>

<script>
  export default {
    name: 'plExerciseStore',
    data() {
      return {
        activeTab: '1',
        data: [
          {
            name: '有理数',
            children: [
              {
                name: '有理数1'
              }
            ]
          },
          {
            name: '无理数',
            children: [
              {
                name: '无理数1'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        dateRange: '',
        dialogVisible: false,
        sectionDialogVisible: false,
        knowledgeDialogVisible: false
      }
    }
  }
</script>
