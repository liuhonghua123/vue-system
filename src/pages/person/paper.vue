<template>
  <div class="pl-sidelayout-right">
    <!-- 个人试卷 -->
    <div class="pl-card xp" style="min-height:640px;">
      <div class="pl-tabs">
        <div class="pl-tabs-tools">
          <label class="c-9">排序:</label>
          <a class="pl-link2 xactive">最新</a>
          <a class="pl-link2">浏览</a>
          <a class="pl-link2">下载</a>
          <i class="pl-sline"></i>
          <a class="pl-link2"><i class="pl-ico xupload"></i>上传</a>
        </div>
        <!-- tab用法详见:http://element.eleme.io/#/zh-CN/component/tabs -->
        <el-tabs v-model="activeTab" type="card">
          <el-tab-pane label="全部(50)" name="tab1">
            <ul class="pl-paperinfos">
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xperson">期未考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xstatus"></i>状态：<span>草稿</span></div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button size="medium">删除</el-button>
                  <el-button type="info" size="medium">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xschool">单元测验</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xstatus"></i>状态：<span class="c-ng">审核不通过</span></div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button size="medium">删除</el-button>
                  <el-button type="info" size="medium">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xcloud">期中考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xstatus"></i>状态：<span>待审核</span></div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button size="medium">删除</el-button>
                  <el-button type="info" size="medium">下载</el-button>
                </div>
              </li>
              <li class="pl-paperinfo">
                <div class="pl-paperinfo-type xcloud">期中考试</div>
                <div class="pl-paperinfo-body">
                  <div class="pl-paperinfo-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xbook"></i>教材：高中数学 >> 人教版</div>
                  <div class="pl-paperinfo-item"><i class="pl-ico xsearchkey"></i>关键字：关键字1，关键字2</div>
                  <div class="pl-paperinfo-item" style="max-width:70%;"><i class="pl-ico xstatus"></i>状态：<span class="c-pass">已审核</span></div>
                  <div class="pl-paperinfo-item" style="max-width:70%;">
                    <span class="pl-paperinfo-tag"><i class="pl-ico xorg"></i>机构名称</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xtime"></i>2018-04-05 15:03</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xteacher"></i>刘老师</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xdownload2"></i>12</span>
                    <span class="pl-paperinfo-tag"><i class="pl-ico xview"></i>20</span>
                  </div>
                </div>
                <div class="pl-paperinfo-btns">
                  <el-button size="medium">取消删除</el-button>
                  <el-button type="info" size="medium">下载</el-button>
                </div>
              </li>
            </ul>

            <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
            <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="个人(1)" name="tab2">内容与面板1相同</el-tab-pane>
          <el-tab-pane label="校本(10)" name="tab3">内容与面板1相同</el-tab-pane>
          <el-tab-pane label="公开(39)" name="tab4">内容与面板1相同</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- /个人试卷 -->
  </div>
</template>

<script>
  export default {
    name: 'plPersonPaper',
    data() {
      return {
        activeTab: 'tab1'
      }
    },
  }
</script>
