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
          <div class="pl-card xp">
            <div class="pl-title">
              <span class="pl-title-label">试卷库</span>
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
          <!-- 试题信息 -->
          <div class="pl-card xp">
            <div class="pl-title">
              <span class="pl-title-label xbold">共50套试卷</span>
              <div class="pl-title-right" style="top:-8px;">
                <label class="c-9">排序:</label>
                <a class="pl-link2 xactive">最新</a>
                <a class="pl-link2">浏览</a>
                <a class="pl-link2">下载</a>
              </div>
            </div>

            <ul class="pl-paperinfos">
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xperson">期未考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xpaper"></i>套卷：中南讯智学科编辑制作期末考试2017上学期</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button type="primary" size="medium">收藏</el-button>
                  <el-button type="info" size="medium" @click="dialogVisible = true">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xschool">单元测验</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xpaper"></i>套卷：中南讯智学科编辑制作期末考试2017上学期</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button size="medium">取消收藏</el-button>
                  <el-button type="info" size="medium" @click="dialogVisible = true">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xcloud">期中考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xpaper"></i>套卷：中南讯智学科编辑制作期末考试2017上学期</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button type="primary" size="medium">收藏</el-button>
                  <el-button type="info" size="medium" @click="dialogVisible = true">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xcloud">期中考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xpaper"></i>套卷：中南讯智学科编辑制作期末考试2017上学期</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button type="primary" size="medium">收藏</el-button>
                  <el-button type="info" size="medium" @click="dialogVisible = true">下载</el-button>
                </div>
              </li>
            </ul>

            <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
            <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
          </div>
          <!-- 试题信息 -->
        </div>
      </div>
    </div>

    <!-- 弹窗:试卷下载 -->
    <el-dialog title="试卷下载" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item class="mb-tiny" label="纸张大小:">
            <el-radio label="A4" class="mt-tiny">
              <span>A4</span>
              <div class="ml-medium mt-tiny"><img src="../../static/images/A4.png" /></div>
            </el-radio>
            <el-radio label="A3" class="mt-tiny">
              <span>A3</span>
              <div class="ml-medium mt-tiny"><img src="../../static/images/A3.png" /></div>
            </el-radio>
          </el-form-item>
          <el-form-item class="mb-tiny" label="试卷内容:">
            <el-checkbox label="答案"></el-checkbox>
            <el-checkbox label="考点"></el-checkbox>
            <el-checkbox label="解析"></el-checkbox>
          </el-form-item>
          <el-form-item class="mb-tiny" label="纸张大小:">
            <el-radio label="1">交试卷(答案在题后)</el-radio>
            <el-radio label="2">交试卷(无答案)</el-radio>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" type="info" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:新增 -->

    <pl-side-float />
  </div>
</template>

<script>
export default {
  name: "plTestPaperStore",
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
      dialogVisible: false
    }
  },
};
</script>
