<template>
  <div class="pl-acpage">
    <div class="pl-answercard">
      <div class="pl-answercard-left">
        <div class="pl-card xsp" v-pl-to-bottom="10">
          <div class="pl-subtitle xsmall">
            <span class="pl-subtitle-text">选择答题卡布局</span>
          </div>

          <div class="pl-grid xpc-x3 xac">
            <div class="pl-grid-col" @click="(cols=1)&&(articalCells=22)"><i class="pl-ico xcol1" :class="{xselected: cols===1}"></i><div>一栏</div></div>
            <div class="pl-grid-col" @click="(cols=2)&&(articalCells=23)"><i class="pl-ico xcol2" :class="{xselected: cols===2}"></i><div>两栏</div></div>
            <div class="pl-grid-col" @click="(cols=3)&&(articalCells=15)"><i class="pl-ico xcol3" :class="{xselected: cols===3}"></i><div>三栏</div></div>
          </div>

          <div class="pl-bgbox2">一栏建议A4，<br>两、三栏建议A3，8k纸张</div>

          <div class="pl-subtitle xsmall">
            <span class="pl-subtitle-text">选择考号版式</span>
          </div>

          <div class="pl-answercard-linebox">
            <el-radio v-model="examineeIdType" label="barCode">条形码</el-radio>
            <el-radio v-model="examineeIdType" label="studentId" style="margin-left:5px;">准考证号</el-radio>
          </div>

          <div class="pl-subtitle xsmall">
            <span class="pl-subtitle-text">题目列表</span>
          </div>

          <div class="pl-answercard-questiontype">
            <a class="pl-link2" @click="optionDialogVisible=true"><i class="pl-ico xadd"></i>单选题</a>
            <a class="pl-link2" @click="optionDialogVisible=true"><i class="pl-ico xadd"></i>多选题</a>
            <a class="pl-link2" @click="fillDialogVisible=true"><i class="pl-ico xadd"></i>填空题</a>
            <a class="pl-link2" @click="shortAnswerDialogVisible=true"><i class="pl-ico xadd"></i>简答题</a>
            <a class="pl-link2" @click="chineseArticalDialogVisible=true"><i class="pl-ico xadd"></i>语文作文</a>
            <a class="pl-link2" @click="englishArticalDialogVisible=true"><i class="pl-ico xadd"></i>英语作文</a>
          </div>

          <ul class="pl-answercard-questionlist">
            <li><label>单选题</label>1-20,35~40</li>
            <li><label>多选题</label>1-20,35~40</li>
            <li><label>填空题</label>3,8</li>
            <li><label>简答题</label>40-45</li>
            <li><label>语文作文</label>20</li>
            <li><label>英语作文</label>21</li>
          </ul>

          <div class="pl-subtitle xborder xsmall">
            <span class="pl-subtitle-text">按题号排序</span>
            <div class="pl-subtitle-right">
              <el-switch
                v-model="demoVal"
                active-color="#2dbe60"
                inactive-color="#b3bac5">
              </el-switch>
            </div>
          </div>

          <div class="pl-subtitle xborder xsmall">
            <span class="pl-subtitle-text">添加页脚</span>
            <div class="pl-subtitle-right">
              <el-switch
                v-model="demoVal"
                active-color="#2dbe60"
                inactive-color="#b3bac5">
              </el-switch>
            </div>
          </div>

          <div style="white-space:nowrap;">
            <el-button size="medium">保 存</el-button>
            <el-button size="medium" type="info">下 载</el-button>
          </div>
        </div>
      </div>

      <div class="pl-answercard-right">
        <!-- 第1页: 开发需每增加一项，都要判断是否超出一页，如果超出，需要新增一张答题卡，然后将新增的内容及之后的内容放入新增的答题卡中，依此类推 -->
        <div class="pl-ac" :class="['xcol'+cols]">
          <div class="pl-ac-body">
            <div class="pl-ac-pagebox">
                <div class="pl-ac-page" :style="{left:0}">
                  <span>第1页</span>
                  <i class="pl-ac-position ly1"></i>
                  <i class="pl-ac-position ly2"></i>
                  <i class="pl-ac-position ly3"></i>
                  <i class="pl-ac-position ly4"></i>
                  <i class="pl-ac-position ly5"></i>
                  <i class="pl-ac-position ly6"></i>
                  <i class="pl-ac-position ry1"></i>
                  <i class="pl-ac-position ry6"></i>
                  <i class="pl-ac-position tx2"></i>
                  <i class="pl-ac-position tx3"></i>
                  <i class="pl-ac-position bx2"></i>
                  <i class="pl-ac-position bx3"></i>
                </div>
            </div>

            <ul ref="content" class="pl-ac-content">
              <li class="pl-ac-content-item">
                <textarea class="pl-ac-name" placeholder="请输入试卷名称"></textarea>
              </li>

              <li class="pl-ac-content-item">
                <div class="pl-ac-paperinfo">
                  <div class="pl-ac-paperinfo-left">
                    <div class="pl-ac-paperinfo-student pl-ac-editable" contenteditable>
                      <label>姓&nbsp;名：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <label>班&nbsp;级：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <label>考场/座位号：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>

                    <div class="pl-ac-paperinfo-attention pl-ac-editable" contenteditable>
                      <h4>注意事项</h4>
                      <p>1．答题前请将姓名、班级、考场、准考证号清楚。</p>
                      <p>2．客观题答题，必须使用2B铅笔填涂，修改时用橡皮擦干净。 </p>
                      <p>3．主观题答题，必须使用黑色签字笔书写。</p>
                      <p>4．必须在题号对应的答题区域内作答，超出答题区域书写无效。 </p>
                      <p>5．保持答卷清洁、完整。 </p>
                    </div>

                    <div class="pl-ac-paperinfo-note">
                      <label>正确填涂</label>
                      <i class="xyes"></i>
                      <label>缺考标记</label>
                      <i></i>
                    </div>
                  </div>

                  <div class="pl-ac-paperinfo-right">
                    <div v-if="examineeIdType==='barCode'" class="pl-ac-barcode">
                      <h4>贴条形码区</h4>
                      <span>（正面朝上，切勿贴出虚线方框）</span>
                    </div>
                    <table v-else class="pl-ac-studentid">
                      <thead>
                        <tr>
                          <th colspan="8">准考证号</th>
                        </tr>
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td v-for="n in 8" :key="n">
                            <div v-for="i in 10" :key="i">[<span>{{i-1}}</span>]</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
              <!-- 单选多选 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>选择题</h4>
                  <div class="pl-ac-asarea-body">
                    <ul class="pl-ac-options">
                      <li><i>1</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>2</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>3</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>4</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>5</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>6</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>7</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>8</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>9</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>10</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>11</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>12</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>13</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>14</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>15</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>16</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>17</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>18</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>19</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>20</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>1</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>2</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>3</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>4</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>5</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>6</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>7</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>8</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>9</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>10</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>11</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>12</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>13</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>14</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>15</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>136</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>137</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>138</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>139</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>230</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /单选多选 -->

              <!-- 选做题 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>选做题</h4>
                  <div class="pl-ac-asarea-body">
                    <ul class="pl-ac-free">
                      <li>
                        <i>11</i>
                        <span></span>
                      </li>
                      <li>
                        <i>12</i>
                        <span></span>
                      </li>
                      <li>
                        <i>13</i>
                        <span></span>
                      </li>
                      <li>
                        <i>14</i>
                        <span></span>
                      </li>
                      <li>
                        <i>15</i>
                        <span></span>
                      </li>
                      <li>
                        <i>16</i>
                        <span></span>
                      </li>
                      <li>
                        <i>17</i>
                        <span></span>
                      </li>
                      <li>
                        <i>18</i>
                        <span></span>
                      </li>
                      <li>
                        <i>19</i>
                        <span></span>
                      </li>
                    </ul>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /选做题 -->

              <!-- 填空 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>填空题</h4>
                  <!-- 以下div的class：x2~x5分别代表一行显示几个填空题 -->
                  <div class="pl-ac-asarea-body xfill x3">
                    <div class="pl-ac-fill"><i>30.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>31.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>32.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>33.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>34.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xsplit"></i></a>
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /填空 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>解答题</h4>
                  <div class="pl-ac-asarea-body">
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xgformula"></i></a>
                      <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
                      <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                        <a class="pl-link2"><i class="pl-ico xaimg"></i></a>
                      </el-upload>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <div class="pl-ac-asarea-body">
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xgformula"></i></a>
                      <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
                      <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                        <a class="pl-link2"><i class="pl-ico xaimg"></i></a>
                      </el-upload>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->
            </ul>
            <ul class="pl-ac-content">
              <!-- 英语作文 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>英语作文</h4>
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-editable" contenteditable>35.</div>
                    <div class="pl-ac-asarea-ea">
                      <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    </div>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /英语作文 -->

              <!-- 语文作文 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea xca">
                  <h4 class="pl-ac-asarea-title" contenteditable>语文作文</h4>
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-editable" contenteditable style="text-align:left; margin-bottom:10px;">32.作文说明作文说明</div>
                    <div class="pl-ac-asarea-ca">
                      <i v-for="n in articalCells" :key="n"></i>
                    </div>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- +6表示达到字数后再增加6行格子 -->
              <li class="pl-ac-content-item" v-for="n in (Math.ceil(articalNum / articalCells)+6)" :key="'cao'+n">
                <div class="pl-ac-asarea xca">
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-asarea-ca">
                      <i v-for="i in articalCells" :key="'cai'+i">
                        <span v-if="((n-1)*articalCells+i)===articalNum" class="pl-ac-asarea-ca-num">{{(n-1)*articalCells+i}}</span>
                      </i>
                    </div>
                  </div>
                </div>
              </li>
              <!-- /语文作文 -->

              <!-- 填空 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>40.填空题</h4>
                  <!-- 以下div的class：x2~x5分别代表一行显示几个填空题 -->
                  <div class="pl-ac-asarea-body xfill x3">
                    <div class="pl-ac-fill"><i>30.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>31.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>32.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>33.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>34.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xsplit"></i></a>
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /填空 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>解答题</h4>
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xgformula"></i></a>
                      <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
                      <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                        <a class="pl-link2"><i class="pl-ico xaimg"></i></a>
                      </el-upload>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xgformula"></i></a>
                      <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
                      <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                        <a class="pl-link2"><i class="pl-ico xaimg"></i></a>
                      </el-upload>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->
            </ul>
          </div>
        </div>
        <!-- /第1页 -->

        <!-- 第2页: 结构与第1页一样 -->
        <div class="pl-ac" :class="['xcol'+cols]">
          <div class="pl-ac-body">
            <div class="pl-ac-pagebox">
                <div class="pl-ac-page" :style="{left:0}">
                  <span>第2页</span>
                  <i class="pl-ac-position ly1"></i>
                  <i class="pl-ac-position ly2"></i>
                  <i class="pl-ac-position ly3"></i>
                  <i class="pl-ac-position ly4"></i>
                  <i class="pl-ac-position ly5"></i>
                  <i class="pl-ac-position ly6"></i>
                  <i class="pl-ac-position ry1"></i>
                  <i class="pl-ac-position ry2"></i>
                  <i class="pl-ac-position ry3"></i>
                  <i class="pl-ac-position ry4"></i>
                  <i class="pl-ac-position ry5"></i>
                  <i class="pl-ac-position ry6"></i>
                  <i class="pl-ac-position tx2"></i>
                  <i class="pl-ac-position tx3"></i>
                  <i class="pl-ac-position bx2"></i>
                  <i class="pl-ac-position bx3"></i>
                </div>
            </div>

            <ul ref="content" class="pl-ac-content">
              <li class="pl-ac-content-item">
                <textarea class="pl-ac-name" placeholder="请输入试卷名称"></textarea>
              </li>

              <li class="pl-ac-content-item">
                <div class="pl-ac-paperinfo">
                  <div class="pl-ac-paperinfo-left">
                    <div class="pl-ac-paperinfo-student pl-ac-editable" contenteditable>
                      <label>姓&nbsp;名：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <label>班&nbsp;级：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <label>考场/座位号：</label>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>

                    <div class="pl-ac-paperinfo-attention pl-ac-editable" contenteditable>
                      <h4>注意事项</h4>
                      <p>1．答题前请将姓名、班级、考场、准考证号清楚。</p>
                      <p>2．客观题答题，必须使用2B铅笔填涂，修改时用橡皮擦干净。 </p>
                      <p>3．主观题答题，必须使用黑色签字笔书写。</p>
                      <p>4．必须在题号对应的答题区域内作答，超出答题区域书写无效。 </p>
                      <p>5．保持答卷清洁、完整。 </p>
                    </div>

                    <div class="pl-ac-paperinfo-note">
                      <label>正确填涂</label>
                      <i class="xyes"></i>
                      <label>缺考标记</label>
                      <i></i>
                    </div>
                  </div>

                  <div class="pl-ac-paperinfo-right">
                    <div v-if="examineeIdType==='barCode'" class="pl-ac-barcode">
                      <h4>贴条形码区</h4>
                      <span>（正面朝上，切勿贴出虚线方框）</span>
                    </div>
                    <table v-else class="pl-ac-studentid">
                      <thead>
                        <tr>
                          <th colspan="8">准考证号</th>
                        </tr>
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td v-for="n in 8" :key="n">
                            <div v-for="i in 10" :key="i">[<span>{{i-1}}</span>]</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
              <!-- 单选多选 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>选择题</h4>
                  <div class="pl-ac-asarea-body">
                    <ul class="pl-ac-options">
                      <li><i>1</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>2</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>3</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>4</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>5</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>6</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>7</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>8</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>9</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>10</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>11</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>12</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>13</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>14</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>15</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>16</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>17</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>18</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>19</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>20</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>1</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>2</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>3</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>4</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>5</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>6</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>7</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>8</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>9</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>10</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>11</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>12</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>13</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>14</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>15</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>
                    <ul class="pl-ac-options">
                      <li><i>136</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>137</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>138</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>139</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                      <li><i>230</i><span>[<b>A</b>]</span><span>[<b>B</b>]</span><span>[<b>C</b>]</span><span>[<b>D</b>]</span></li>
                    </ul>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /单选多选 -->

              <!-- 填空 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>填空题</h4>
                  <!-- 以下div的class：x2~x5分别代表一行显示几个填空题 -->
                  <div class="pl-ac-asarea-body xfill x3">
                    <div class="pl-ac-fill"><i>30.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>31.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>32.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>33.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>34.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xsplit"></i></a>
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /填空 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>解答题</h4>
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->

              <!-- 英语作文 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>英语作文</h4>
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-editable" contenteditable>35.</div>
                    <div class="pl-ac-asarea-ea">
                      <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    </div>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /英语作文 -->

              <!-- 语文作文 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea xca">
                  <h4 class="pl-ac-asarea-title" contenteditable>语文作文</h4>
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-editable" contenteditable style="text-align:left; margin-bottom:10px;">32.作文说明作文说明</div>
                    <div class="pl-ac-asarea-ca">
                      <i v-for="n in articalCells" :key="n"></i>
                    </div>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- +6表示达到字数后再增加6行格子 -->
              <li class="pl-ac-content-item" v-for="n in (Math.ceil(articalNum / articalCells)+6)" :key="'cao'+n">
                <div class="pl-ac-asarea xca">
                  <div class="pl-ac-asarea-body">
                    <div class="pl-ac-asarea-ca">
                      <i v-for="i in articalCells" :key="'cai'+i">
                        <span v-if="((n-1)*articalCells+i)===articalNum" class="pl-ac-asarea-ca-num">{{(n-1)*articalCells+i}}</span>
                      </i>
                    </div>
                  </div>
                </div>
              </li>
              <!-- /语文作文 -->

              <!-- 填空 -->
              <li class="pl-ac-content-item">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>40.填空题</h4>
                  <!-- 以下div的class：x2~x5分别代表一行显示几个填空题 -->
                  <div class="pl-ac-asarea-body xfill x3">
                    <div class="pl-ac-fill"><i>30.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>31.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>32.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>33.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>
                    <div class="pl-ac-fill"><i>34.</i><div class="pl-fill-body"></div><a class="pl-link2"><i class="pl-ico xdel"></i></a></div>

                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xsplit"></i></a>
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /填空 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <h4 class="pl-ac-asarea-title" contenteditable>解答题</h4>
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->

              <!-- 解答题 -->
              <li class="pl-ac-content-item xsa">
                <div class="pl-ac-asarea">
                  <div class="pl-ac-asarea-body">
                    <pl-question-editor v-model="questionNo"></pl-question-editor>
                    <!-- 工具区 -->
                    <div class="pl-ac-asarea-tools">
                      <a class="pl-link2"><i class="pl-ico xadd"></i></a>
                      <a class="pl-link2"><i class="pl-ico xdel"></i></a>
                    </div>
                    <a class="pl-link2 xresize" @mousedown="resizeStart"><i class="pl-ico xresize"></i></a>
                    <!-- /工具区 -->
                  </div>
                </div>
              </li>
              <!-- /解答题 -->
            </ul>
          </div>
        </div>
        <!-- /第2页 -->
      </div>
    </div>

    <!-- 弹窗:增加单/多选题 -->
    <el-dialog title="添加题目" :visible.sync="optionDialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="题目名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label=" " style="text-align:left;">
            <el-radio label="单选题"></el-radio>
            <el-radio label="多选题"></el-radio>
          </el-form-item>
          <el-form-item label="题号:" style="text-align:left;">
            <el-input style="width:45%;"></el-input>
            <span>-</span>
            <el-input style="width:45%;"></el-input>
          </el-form-item>
          <el-form-item label="选项个数:" style="text-align:left;">
            <el-input style="width:45%;"></el-input>
            <el-checkbox v-model="checked" style="margin-left:15px;">判断题</el-checkbox>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="optionDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="optionDialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:增加单选题 -->

    <!-- 弹窗:增加填空题 -->
    <el-dialog title="添加题目" :visible.sync="fillDialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="题目名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="题号:" style="text-align:left;">
            <el-input style="width:45%;"></el-input>
            <span>-</span>
            <el-input style="width:45%;"></el-input>
          </el-form-item>
          <el-form-item label="每行空数:" style="text-align:left;">
            <el-input style="width:45%;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="fillDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="fillDialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:增加填空题 -->

    <!-- 弹窗:增加简答题 -->
    <el-dialog title="添加题目" :visible.sync="shortAnswerDialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="题目名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="题号:" style="text-align:left;">
            <el-input style="width:45%;"></el-input>
            <span>-</span>
            <el-input style="width:45%;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="shortAnswerDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="shortAnswerDialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:增加简答题 -->

    <!-- 弹窗:语文作文题 -->
    <el-dialog title="添加题目" :visible.sync="chineseArticalDialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="作文格数:">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="chineseArticalDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="chineseArticalDialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:语文作文题 -->

    <!-- 弹窗:英语作文题 -->
    <el-dialog title="添加题目" :visible.sync="englishArticalDialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="作文行数:">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="englishArticalDialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="englishArticalDialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:英语作文题 -->
  </div>
</template>

<script>
  import QuestionEditor from '@/components/question-editor'

  export default {
    name: 'plAnswerCard',
    components: {
    'plQuestionEditor': QuestionEditor
    },
    data() {
      return {
        demoVal: '',
        examineeIdType: 'barCode',
        cols: 2,
        articalCells: 23,
        articalNum: 80,
        resizeStartY: 0,
        originalHeight: 0,
        currentResizeEl: null,
        optionDialogVisible: false,
        fillDialogVisible: false,
        shortAnswerDialogVisible: false,
        chineseArticalDialogVisible: false,
        englishArticalDialogVisible: false,
        questionNo: '32.'
      }
    },
    computed: {
      pageWidth () {
        if(this.cols===1) {
          return 210
        } else if (this.cols===2) {
          return 210
        } else {
          return 140
        }
      }
    },
    methods: {
      resizeStart (event) {
        this.currentResizeEl = event.currentTarget.parentNode
        this.originalHeight = this.currentResizeEl.offsetHeight
        this.resizeStartY = event.pageY

        document.documentElement.addEventListener('mousemove', this.resize)
        document.documentElement.addEventListener('mouseup', this.resizeEnd)
      },
      resize (event) {
        this.currentResizeEl.style.height = this.originalHeight + event.pageY - this.resizeStartY + 'px'
      },
      resizeEnd () {
        document.documentElement.removeEventListener('mousemove', this.resize)
        document.documentElement.removeEventListener('mouseup', this.resizeEnd)
        this.refreshContent()
      },
      // 强制刷新内容，每次添加内容必须调用
      refreshContent () {
        this.$refs.content.style.display="none"
        /* eslint-disable */
        const width = this.$refs.content.offsetWidth
        this.$refs.content.style.display=''
      }
    }
  }
</script>
