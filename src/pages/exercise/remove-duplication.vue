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
          <div class="pl-card xp" style="padding-bottom:30px;">
            <div class="pl-title">
              <span class="pl-title-label">初审试题</span>
            </div>
            <div class="pl-astable xfilter">
              <div class="pl-astable-row">
                <div class="pl-astable-col xfilter-label" style="width:5em;">试题类型:</div>
                <div class="pl-astable-col">
                  <a class="pl-tag xactive">全部</a>
                  <a class="pl-tag">单选</a>
                  <a class="pl-tag">多选</a>
                  <a class="pl-tag">判断题</a>
                  <a class="pl-tag">填空题</a>
                  <a class="pl-tag">简答题</a>
                  <a class="pl-tag">听力题</a>
                  <a class="pl-tag">连线题</a>
                  <a class="pl-tag">跟读题</a>
                  <a class="pl-tag">综合题</a>
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
          </div>
          <!-- 试题信息 -->
          <div class="pl-card xp">
            <div class="pl-title">
              <span class="pl-title-label xbold" style="line-height:40px;">共1.3万试题</span>
              <div class="pl-title-right">
                <label class="c-9">排序:</label>
                <a class="pl-link2 xactive">最新</a>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
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
                 <span style="margin-right:10px;">相似题:12道</span>
                 <el-button size="medium" type="primary" @click.native="navigationToDetail">重置处理</el-button>
                </template>
              </pl-question-detail-join>
              <!-- /题型:综合题  -->
            </div>
            <!-- /试题列表 -->

            <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
            <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
          </div>
          <!-- 试题信息 -->
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
  name: "plAddExamQuestionDetail",
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
      dialogVisible: false
    }
  },
  methods: {
    navigationToDetail () {
      this.$router.push('/exercise-remove-duplication-detail')
    }
  }
}
</script>

