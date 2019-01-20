<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left">
          <!-- 卷参设置 -->
          <div class="pl-card xsp">
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">卷参设置</span>
            </div>

            <div class="pl-paperparams">
              <div class="pl-paperparams-header">
                <el-radio label="简易"></el-radio>
                <el-radio label="普通"></el-radio>
                <el-radio label="正式"></el-radio>
              </div>
              <div class="pl-paperparams-body">
                <el-checkbox label="副标题"></el-checkbox>
                <el-checkbox label="试卷信息"></el-checkbox>
                <el-checkbox label="考生信息"></el-checkbox>
                <el-checkbox label="分卷及注释"></el-checkbox>
                <el-checkbox label="总分栏"></el-checkbox>
                <el-checkbox label="大题评分区"></el-checkbox>
                <el-checkbox label="装订线"></el-checkbox>
                <el-checkbox label="注意事项"></el-checkbox>
                <el-checkbox label="保密标记"></el-checkbox>
              </div>
            </div>
          </div>
          <!-- /卷参设置 -->

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

           <!-- 附件区 -->
          <div class="pl-card xsp">
            <div class="pl-subtitle xsmall">
              <span class="pl-subtitle-text">附件区</span>
              <div class="pl-subtitle-right">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                  <a class="pl-link">上传附件</a>
                </el-upload>
              </div>
            </div>

            <div class="pl-detailattachments">
              <div class="pl-attachment">
                <div class="pl-attachment-img">
                  <i class="pl-ico xword"></i>
                </div>
                <div class="pl-attachment-body">
                  <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
                </div>
                <a class="pl-link"><i class="pl-ico xdel"></i></a>
              </div>
              <div class="pl-attachment">
                <div class="pl-attachment-img">
                  <i class="pl-ico ximg"></i>
                </div>
                <div class="pl-attachment-body">
                  <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
                </div>
                <a class="pl-link"><i class="pl-ico xdel"></i></a>
              </div>
              <div class="pl-attachment">
                <div class="pl-attachment-img">
                  <i class="pl-ico ximg"></i>
                </div>
                <div class="pl-attachment-body">
                  <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
                </div>
                <a class="pl-link"><i class="pl-ico xdel"></i></a>
              </div>
            </div>
          </div>
           <!-- /附件区 -->
        </div>
        <div class="pl-sidelayout-right">
          <!-- 试卷信息: 去掉以下class中的xgutter将去掉装订线效果 -->
          <div class="pl-card xp xfixedfooter pl-paperdetail xgutter" style="min-height:1175px;">
            <!-- 请删除以下的value值，用v-model替代 -->
            <el-input class="pl-paperdetail-param xtitle" readonly value="2018年03月24日189****0518的初中数学组卷"></el-input>
            <el-input class="pl-paperdetail-param xsubtitle" readonly value="试卷副标题"></el-input>
            <el-input class="pl-paperdetail-param xinfo" readonly value="考试范围：xxx；考试时间：100分钟；命题人：xxx"></el-input>
            <el-input class="pl-paperdetail-param xstudent" readonly value="学校:___________姓名：___________班级：___________考号：___________"></el-input>
            <div class="pl-astable xscore xtotal">
              <div class="pl-astable-row">
                <div class="pl-astable-col">题号</div>
                <div class="pl-astable-col">一</div>
                <div class="pl-astable-col">总分</div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col">得分</div>
                <div class="pl-astable-col"></div>
                <div class="pl-astable-col"></div>
              </div>
            </div>
            <div class="pl-paperdetail-note">注意事项：</div>
            <el-input class="pl-paperdetail-note" type="text" readonly value="1．答题前填写好自己的姓名、班级、考号等信息等"></el-input>
            <el-input class="pl-paperdetail-param xgroup" readonly value="第I卷（选择题）"></el-input>
            <el-input class="pl-paperdetail-note" readonly value="请点击修改第I卷的文字说明:"></el-input>
            <div class="pl-astable xquestiontype">
              <div class="pl-astable-col" style="width:160px;">
                <div class="pl-astable xscore xtotal" style="width:100%;">
                  <div class="pl-astable-row">
                    <div class="pl-astable-col">评卷人</div>
                    <div class="pl-astable-col">得分</div>
                  </div>
                  <div class="pl-astable-row">
                    <div class="pl-astable-col"></div>
                    <div class="pl-astable-col"></div>
                  </div>
                </div>
              </div>
              <div class="pl-astable-col">
                <el-input class="xquestiotype-title"  readonly value="二．填空题（共2小题）">一．选择题（共2小题）</el-input>
              </div>
            </div>
            <pl-questionlist>
              <!-- 题型:选择题 -->
              <pl-question-detail-select class="xselecting">
                <el-rate slot="tools-front"></el-rate>
                <template slot="tools">
                  <el-input size="small" style="width:40px;"></el-input>
                  <span>分</span>
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <a class="pl-link" @click="questionDialogVisible=true"><i class="pl-ico xmodify"></i></a>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </template>
              </pl-question-detail-select>
              <!-- 题型:选择题 -->

              <!-- 题型:选择题 -->
              <pl-question-detail-select>
                <el-rate slot="tools-front"></el-rate>
                <template slot="tools">
                  <span>分</span>
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <a class="pl-link" @click="questionDialogVisible=true"><i class="pl-ico xmodify"></i></a>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </template>
              </pl-question-detail-select>
              <!-- 题型:选择题 -->
            </pl-questionlist>

            <pl-questionlist>
              <!-- 题型:图片试题演示 -->
              <div class="pl-question-image">
                <img src="../../static/images/question-image.png" />
                <div class="pl-question-image-tools">
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <el-upload class="pl-uploadicon" action="https://jsonplaceholder.typicode.com/posts/">
                    <a class="pl-link"><i class="pl-ico xupload"></i></a>
                  </el-upload>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </div>
              </div>
              <!-- 题型:图片试题演示 -->

              <!-- 题型:图片试题演示 -->
              <div class="pl-question-image">
                <img src="../../static/images/question-image.png" />
                <div class="pl-question-image-tools">
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <el-upload class="pl-uploadicon" action="https://jsonplaceholder.typicode.com/posts/">
                    <a class="pl-link"><i class="pl-ico xupload"></i></a>
                  </el-upload>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </div>
              </div>
              <!-- 题型:图片试题演示 -->
            </pl-questionlist>

            <el-input class="pl-paperdetail-param xgroup" readonly value="第II卷（选择题）"></el-input>
            <el-input class="pl-paperdetail-note" readonly value="请点击修改第I卷的文字说明:"></el-input>
            <div class="pl-astable xquestiontype">
              <div class="pl-astable-col" style="width:160px;">
                <div class="pl-astable xscore xtotal" style="width:100%;">
                  <div class="pl-astable-row">
                    <div class="pl-astable-col">评卷人</div>
                    <div class="pl-astable-col">得分</div>
                  </div>
                  <div class="pl-astable-row">
                    <div class="pl-astable-col"></div>
                    <div class="pl-astable-col"></div>
                  </div>
                </div>
              </div>
              <div class="pl-astable-col">
                <el-input class="xquestiotype-title" readonly value="二．填空题（共2小题）">二．填空题（共2小题）</el-input>
              </div>
            </div>
            <pl-questionlist>
              <!-- 题型:填空题 -->
              <pl-question-detail-fill>
                <el-rate slot="tools-front"></el-rate>
                <template slot="tools">
                  <el-input size="small" style="width:40px;"></el-input>
                  <span>分</span>
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <a class="pl-link" @click="questionDialogVisible=true"><i class="pl-ico xmodify"></i></a>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </template>
              </pl-question-detail-fill>
              <!-- /题型:填空题 -->

              <!-- 题型:填空题 -->
              <pl-question-detail-fill>
                <el-rate slot="tools-front"></el-rate>
                <template slot="tools">
                  <el-input size="small" style="width:40px;"></el-input>
                  <span>分</span>
                  <a class="pl-link ml-small"><i class="pl-ico xprev"></i></a>
                  <a class="pl-link"><i class="pl-ico xnext"></i></a>
                  <a class="pl-link" @click="questionDialogVisible=true"><i class="pl-ico xmodify"></i></a>
                  <a class="pl-link"><i class="pl-ico xdel"></i></a>
                </template>
              </pl-question-detail-fill>
              <!-- /题型:填空题 -->
            </pl-questionlist>

            <div class="pl-fixfooter" v-pl-sticky:bottom="80">
              <el-button type="info">保存</el-button>
              <el-button type="info">提交审批</el-button>
              <el-button>删除</el-button>
              <el-button>清空</el-button>
              <el-date-picker
                style="width:300px;"
                v-model="dateDemo"
                type="datetime"
                size="medium"
                format="yyyy-MM-dd A HH:mm"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>
          <!-- 试卷信息 -->
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

    <!-- 弹窗:编辑试题 -->
    <el-dialog title="编辑试题" :visible.sync="questionDialogVisible" width="960px">
      <div class="pl-dialogbody">
        <!-- 单选题示例 -->
        <pl-question-single></pl-question-single>
        <!-- /单选题示例 -->
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="questionDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="questionDialogVisible = false">选 择</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:编辑试题 -->

    <!-- 试题统计 -->
    <div class="pl-sidefloat xcount xcart" :class="{xactive:floatVisible}">
      <div class="pl-sidefloat-left" @click="floatVisible=!floatVisible">
        <span>试题统计</span>
        <i>></i>
      </div>
      <div class="pl-sidefloat-body">
        <div class="xcart-header">分数:<b class="pl-num">150</b>&nbsp;&nbsp;&nbsp;题数:<b class="pl-num">40</b>&nbsp;&nbsp;&nbsp;难度:<b class="pl-num">普通</b>&nbsp;&nbsp;&nbsp;</div>
        <div class="xcount-body">
          <div class="xcount-type">
            <div class="xcount-type-title">
              <label>一、选择题</label>
              <div>
                <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
                <a class="xcart-next"><i class="pl-ico xnext"></i></a>
                <a class="xcart-del"><i class="pl-ico xdel"></i></a>
              </div>
            </div>
            <div class="xount-type-body">
              <i class="pl-qno">1</i>
              <i class="pl-qno">2</i>
              <i class="pl-qno">4</i>
              <i class="pl-qno">5</i>
              <i class="pl-qno">6</i>
              <i class="pl-qno">7</i>
              <i class="pl-qno">8</i>
              <i class="pl-qno">9</i>
              <i class="pl-qno">10</i>
            </div>
          </div>
          <div class="xcount-type">
            <div class="xcount-type-title">
              <label>二、填空题</label>
              <div>
                <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
                <a class="xcart-next"><i class="pl-ico xnext"></i></a>
                <a class="xcart-del"><i class="pl-ico xdel"></i></a>
              </div>
            </div>
            <div class="xount-type-body">
              <i class="pl-qno">1</i>
              <i class="pl-qno">2</i>
              <i class="pl-qno">4</i>
              <i class="pl-qno">5</i>
              <i class="pl-qno">6</i>
              <i class="pl-qno">7</i>
              <i class="pl-qno">8</i>
              <i class="pl-qno">9</i>
              <i class="pl-qno">10</i>
            </div>
          </div>
          <div class="xcount-type">
            <div class="xcount-type-title">
              <label>三、简答题</label>
              <div>
                <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
                <a class="xcart-next"><i class="pl-ico xnext"></i></a>
                <a class="xcart-del"><i class="pl-ico xdel"></i></a>
              </div>
            </div>
            <div class="xount-type-body">
              <i class="pl-qno">1</i>
              <i class="pl-qno">2</i>
              <i class="pl-qno">4</i>
              <i class="pl-qno">5</i>
              <i class="pl-qno">6</i>
              <i class="pl-qno">7</i>
              <i class="pl-qno">8</i>
              <i class="pl-qno">9</i>
              <i class="pl-qno">10</i>
            </div>
          </div>
          <div class="xcount-type">
            <div class="xcount-type-title">
              <label>四、综合题</label>
              <div>
                <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
                <a class="xcart-next"><i class="pl-ico xnext"></i></a>
                <a class="xcart-del"><i class="pl-ico xdel"></i></a>
              </div>
            </div>
            <div class="xount-type-body">
              <i class="pl-qno">1</i>
              <i class="pl-qno">2</i>
              <i class="pl-qno">4</i>
              <i class="pl-qno">5</i>
              <i class="pl-qno">6</i>
              <i class="pl-qno">7</i>
              <i class="pl-qno">8</i>
              <i class="pl-qno">9</i>
              <i class="pl-qno">10</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /试题统计 -->
  </div>
</template>

<script>
export default {
  name: "plAddExamQuestion",
  data() {
    return {
      floatVisible: false,
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
      knowledgeDialogVisible: false,
      questionDialogVisible: false,
      dateDemo:''
    }
  }
}
</script>
