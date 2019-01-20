<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left">
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
          <!-- 试题信息 -->
          <div class="pl-card xp xfixedfooter" v-pl-to-bottom="60">
            <div class="pl-title">
              <span class="pl-title-label">智能组卷</span>
            </div>
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">已选章节/知识点:（4个）</span>
              <div class="pl-subtitle-right">
                <a class="pl-link2"><i class="pl-ico xdel"></i>清空</a>
              </div>
            </div>
            <div class="pl-bgbox mb-large">
              <div class="pl-deltags">
                <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>有理数有理数有理数有理数有理数有理数有理数有理数有理数</span>
                <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>有理数</span>
                <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>有理数</span>
                <span class="pl-deltag"><a><i class="pl-ico xremove"></i></a>有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数有理数</span>
              </div>
            </div>
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">试卷设置</span>
            </div>
            <div class="pl-bgbox mb-large no-py">
              <div class="pl-astable xtypelist">
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:5em;">试卷难度:</div>
                  <div class="pl-astable-col">
                    <div class="pl-radiobox">
                      <el-radio label="不限"></el-radio>
                      <el-radio label="容易"></el-radio>
                      <el-radio label="普通"></el-radio>
                      <el-radio label="困难"></el-radio>
                    </div>
                  </div>
                </div>
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:5em;">出卷方式:</div>
                  <div class="pl-astable-col">
                    <div class="pl-radiobox">
                      <el-radio label="精准出题"></el-radio>
                      <el-radio label="关联出题"></el-radio>
                    </div>
                  </div>
                </div>
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:5em;">适用年级:</div>
                  <div class="pl-astable-col">
                    <div class="pl-radiobox">
                      <el-radio label="七年级"></el-radio>
                      <el-radio label="八年级"></el-radio>
                      <el-radio label="九年级"></el-radio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">题型/题量设置试卷设置</span>
            </div>
            <div class="p-medium">
              <div class="mb-medium">
                <a class="pl-link2 xdisabled"><i class="pl-ico xadd"></i>单选题</a>
                <a class="pl-link2 xdisabled ml-medium"><i class="pl-ico xadd"></i>多选题</a>
                <a class="pl-link2 xdisabled ml-medium"><i class="pl-ico xadd"></i>判断题</a>
                <a class="pl-link2 ml-medium"><i class="pl-ico xadd"></i>填空题</a>
                <a class="pl-link2 ml-medium"><i class="pl-ico xadd"></i>简答题</a>
                <a class="pl-link2 ml-medium"><i class="pl-ico xadd"></i>听力题</a>
                <a class="pl-link2 ml-medium"><i class="pl-ico xadd"></i>综合题</a>
              </div>
              <div class="pl-astable xtypelist xnoborder">
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:4em;">单选题:</div>
                  <div class="pl-astable-col" style="width: 120px;"><span class="pl-smallnote">9999+道题可用</span></div>
                  <div class="pl-astable-col" style="width: 150px">
                    <el-input size="medium" style="width:100px;"></el-input>
                    <span>道</span>
                  </div>
                  <div class="pl-astable-col">
                    <a style="visibility:hidden;"><i class="pl-ico xprev"></i></a>
                    <a class="ml-tiny"><i class="pl-ico xnext"></i></a>
                    <a class="ml-tiny"><i class="pl-ico xdel"></i></a>
                  </div>
                </div>
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:4em;">多选题:</div>
                  <div class="pl-astable-col" style="width: 120px;"><span class="pl-smallnote">9999+道题可用</span></div>
                  <div class="pl-astable-col" style="width: 150px">
                    <el-input size="medium" style="width:100px;"></el-input>
                    <span>道</span>
                  </div>
                  <div class="pl-astable-col">
                    <a><i class="pl-ico xprev"></i></a>
                    <a class="ml-tiny"><i class="pl-ico xnext"></i></a>
                    <a class="ml-tiny"><i class="pl-ico xdel"></i></a>
                  </div>
                </div>
                <div class="pl-astable-row">
                  <div class="pl-astable-col xtypelist-label" style="width:4em;">填空题:</div>
                  <div class="pl-astable-col" style="width: 120px;"><span class="pl-smallnote">9999+道题可用</span></div>
                  <div class="pl-astable-col" style="width: 150px">
                    <el-input size="medium" style="width:100px;"></el-input>
                    <span>道</span>
                  </div>
                  <div class="pl-astable-col">
                    <a><i class="pl-ico xprev"></i></a>
                    <a class="ml-tiny"><i class="pl-ico xnext"></i></a>
                    <a class="ml-tiny" style="visibility:hidden;"><i class="pl-ico xdel"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-fixfooter">
              <el-button type="info">生成试卷</el-button>
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
  name: "plGroupPaperAuto",
  data() {
    return {
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
      activeTab: '1'
    }
  },
};
</script>
