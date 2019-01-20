<template>
  <div class="pl-main xwhite" style="padding-top:0;">
    <div class="pl-main-inner">
      <!-- banner轮播 -->
      <div class="pl-banner">
        <el-carousel height="240px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../static/images/banner1.png" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- /banner轮播 -->

      <div class="pl-lrlayout">
        <div class="pl-lrlayout-body">
          <!-- 通知公告 -->
          <div class="pl-module">
            <div class="pl-title">
              <span class="pl-title-label">通知公告</span>
              <router-link class="pl-title-right" to="/home"><span class="pl-more">更多</span></router-link>
            </div>
            <div style="padding-left:20px;">
              <div class="pl-infolist">
                <div class="pl-infolist-row">
                  <div class="pl-infolist-cell" style="width:60%;">
                    <div class="pl-notice-title"><a class="pl-notice-title-body">系统通知、系统公告、学校公告，管理员发布通知信息</a></div>
                  </div>
                  <div class="pl-infolist-cell" style="text-align: right;">
                    <span class="pl-weaktext">系统通知</span>
                    <span class="pl-weaktext">2018-03-25 01:10</span>
                  </div>
                </div>
                <div class="pl-infolist-row">
                  <div class="pl-infolist-cell" style="width:60%;">
                    <div class="pl-notice-title xreaded"><a class="pl-notice-title-body">您发布的试卷《测试试卷》已通过审批</a></div>
                  </div>
                  <div class="pl-infolist-cell" style="text-align: right;">
                    <span class="pl-weaktext">系统通知</span>
                    <span class="pl-weaktext">2018-03-25 01:10</span>
                  </div>
                </div>
                <div class="pl-infolist-row">
                  <div class="pl-infolist-cell" style="width:60%;">
                    <div class="pl-notice-title xreaded"><a class="pl-notice-title-body">您发布的试卷《测试试卷》已通过审批</a></div>
                  </div>
                  <div class="pl-infolist-cell" style="text-align: right;">
                    <span class="pl-weaktext">系统通知</span>
                    <span class="pl-weaktext">2018-03-25 01:10</span>
                  </div>
                </div>
                <div class="pl-infolist-row">
                  <div class="pl-infolist-cell" style="width:60%;">
                    <div class="pl-notice-title xreaded"><a class="pl-notice-title-body">您发布的试卷《测试试卷》已通过审批</a></div>
                  </div>
                  <div class="pl-infolist-cell" style="text-align: right;">
                    <span class="pl-weaktext">系统通知</span>
                    <span class="pl-weaktext">2018-03-25 01:10</span>
                  </div>
                </div>
                <div class="pl-infolist-row">
                  <div class="pl-infolist-cell" style="width:60%;">
                    <div class="pl-notice-title xreaded"><a class="pl-notice-title-body">您发布的试卷《测试试卷》已通过审批</a></div>
                  </div>
                  <div class="pl-infolist-cell" style="text-align: right;">
                    <span class="pl-weaktext">系统通知</span>
                    <span class="pl-weaktext">2018-03-25 01:10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /通知公告 -->

          <!-- 最近使用试卷 -->
          <div class="pl-module">
            <div class="pl-title">
              <span class="pl-title-label">最近使用试卷</span>
              <router-link class="pl-title-right" to="/home"><span class="pl-more">更多</span></router-link>
            </div>
            <div class="pl-grid xpc-x4">
              <div class="pl-grid-col">
                <div class="pl-bgpaper xno1">
                  <div class="pl-bgpaper-time">今天 15:30</div>
                  <div class="pl-bgpaper-body">
                    <div class="pl-bgpaper-title">人教版初二数学第一单元同步测验</div>
                    <div class="pl-bgpaper-btn">个人使用</div>
                  </div>
                </div>
              </div>
              <div class="pl-grid-col">
                <div class="pl-bgpaper xno2">
                  <div class="pl-bgpaper-time">今天 15:30</div>
                  <div class="pl-bgpaper-body">
                    <div class="pl-bgpaper-title">人教版初二数学第一单元同步测验</div>
                    <div class="pl-bgpaper-btn">模拟考试</div>
                  </div>
                </div>
              </div>
              <div class="pl-grid-col">
                <div class="pl-bgpaper xno3">
                  <div class="pl-bgpaper-time">今天 15:30</div>
                  <div class="pl-bgpaper-body">
                    <div class="pl-bgpaper-title">人教版初二数学第一单元同步测验</div>
                    <div class="pl-bgpaper-btn">模拟考试</div>
                  </div>
                </div>
              </div>
              <div class="pl-grid-col">
                <div class="pl-bgpaper xno4">
                  <div class="pl-bgpaper-time">今天 15:30</div>
                  <div class="pl-bgpaper-body">
                    <div class="pl-bgpaper-title">人教版初二数学第一单元同步测验</div>
                    <div class="pl-bgpaper-btn">个人使用</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /最近使用试卷 -->

          <!-- 最近使用试题 -->
          <div class="pl-module">
            <div class="pl-title">
              <span class="pl-title-label">最近使用试题</span>
              <router-link class="pl-title-right" to="/home"><span class="pl-more">更多</span></router-link>
            </div>
            <div class="pl-infolist">
               <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:60px;">
                  <i class="pl-ico xs1"></i>
                </div>
                <div class="pl-infolist-cell">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属</a>
                  <div>
                    <span class="pl-weaktext">个人使用</span>
                    <span class="pl-weaktext">今天 15:30</span>
                  </div>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:60px;">
                  <i class="pl-ico xs2"></i>
                </div>
                <div class="pl-infolist-cell">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色属</a>
                  <div>
                    <span class="pl-weaktext">个人使用</span>
                    <span class="pl-weaktext">今天 15:30</span>
                  </div>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:60px;">
                  <i class="pl-ico xs3"></i>
                </div>
                <div class="pl-infolist-cell">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色属</a>
                  <div>
                    <span class="pl-weaktext">个人使用</span>
                    <span class="pl-weaktext">今天 15:30</span>
                  </div>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:60px;">
                  <i class="pl-ico xs2"></i>
                </div>
                <div class="pl-infolist-cell">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色属灰蓝色或银白色属</a>
                  <div>
                    <span class="pl-weaktext">个人使用</span>
                    <span class="pl-weaktext">今天 15:30</span>
                  </div>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:60px;">
                  <i class="pl-ico xs3"></i>
                </div>
                <div class="pl-infolist-cell">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色属镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色属</a>
                  <div>
                    <span class="pl-weaktext">个人使用</span>
                    <span class="pl-weaktext">今天 15:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /最近使用试题 -->
        </div>
        <div class="pl-lrlayout-side">
          <!-- 试卷推荐 -->
          <div class="pl-module">
            <div class="pl-title">
              <span class="pl-title-label">试卷推荐</span>
              <router-link class="pl-title-right" to="/home"><span class="pl-more">更多</span></router-link>
            </div>

            <div>
              <div class="pl-bgblock xno1">
                <h4 class="pl-bgblock-title">单元练习</h4>
                <div class="pl-bgblock-body">人教版初二数学第一单元同步测验</div>
              </div>
              <div class="pl-bgblock xno2">
                <h4 class="pl-bgblock-title">单元练习</h4>
                <div class="pl-bgblock-body">人教版初二数学第一单元同步测验</div>
              </div>
              <div class="pl-bgblock xno3">
                <h4 class="pl-bgblock-title">单元练习</h4>
                <div class="pl-bgblock-body">人教版初二数学第一单元同步测验</div>
              </div>
              <div class="pl-bgblock xno4">
                <h4 class="pl-bgblock-title">单元练习</h4>
                <div class="pl-bgblock-body">人教版初二数学第一单元同步测验</div>
              </div>
              <div class="pl-bgblock xno5">
                <h4 class="pl-bgblock-title">单元练习</h4>
                <div class="pl-bgblock-body">人教版初二数学第一单元同步测验</div>
              </div>
            </div>
          </div>
          <!-- /试卷推荐 -->

          <!-- 最新试题 -->
          <div class="pl-module">
            <div class="pl-title">
              <span class="pl-title-label">最新试题</span>
              <router-link class="pl-title-right" to="/home"><span class="pl-more">更多</span></router-link>
            </div>
            <div class="pl-infolist xbg">
               <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
              <div class="pl-infolist-row">
                <div class="pl-infolist-cell" style="width:75%;">
                  <a class="pl-infolist-title">镓是一种灰蓝色或银白色的金属镓是一种灰蓝色或银白色的金属镓是一种灰属</a>
                </div>
                <div class="pl-infolist-cell" style="text-align:right;">
                  <span class="pl-weaktext">07-09</span>
                </div>
              </div>
            </div>
          </div>
          <!-- /最新试题 -->
        </div>

        <!-- 无数据演示 -->
        <div v-if="false">33</div>
        <pl-no-data v-else>暂无数据演示</pl-no-data>
        <!-- 无数据演示 -->
      </div>
    </div>

    <pl-side-float />
  </div>
</template>
<script>
  export default {
    name: 'plTeacherHome'
  }
</script>
