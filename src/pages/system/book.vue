<template>
  <div class="pl-sidelayout-right">
    <!-- 教材管理 -->
    <div class="pl-card xp" v-pl-to-bottom="60">
      <div class="pl-title">
        <span class="pl-title-label">教材管理</span>
      </div>

      <div class="pl-astable">
        <div class="pl-astable-col" style="width:260px; padding-right:20px;">
          <div class="pl-btnarea">
            <a class="pl-icobtn" @click="dialogVisible=true"><i class="pl-ico xadd"></i><span>新增下级</span></a>
            <a class="pl-icobtn" @click="dialogVisible=true"><i class="pl-ico xmodify"></i><span>修改</span></a>
            <a class="pl-icobtn" @click="handleDelete"><i class="pl-ico xdel"></i><span>删除</span></a>
          </div>
          <div class="pl-searchinput">
            <el-input size="medium"></el-input>
            <i class="el-icon-search"></i>
          </div>
          <div class="pl-treebox xschool">
            <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
            <el-tree :data="data" :props="defaultProps"></el-tree>
          </div>
        </div>

        <div class="pl-astable-col">
          <div class="pl-astable xformdetail">
            <div class="pl-astable-row">
              <div class="pl-astable-col" style="width: 7em;">章节编码:</div>
              <div class="pl-astable-col">987654321</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">章节名称:</div>
              <div class="pl-astable-col">无理数</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">类型:</div>
              <div class="pl-astable-col">教材</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">知识点:</div>
              <div class="pl-astable-col">知识点A</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">状态:</div>
              <div class="pl-astable-col">启用</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">章节描述:</div>
              <div class="pl-astable-col">章节描述章节描述章节描述章节描述章节描述章节描述章节描述章节描述章节描述</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">创建时间:</div>
              <div class="pl-astable-col">2018-03-25</div>
            </div>
            <div class="pl-astable-row">
              <div class="pl-astable-col">修改时间:</div>
              <div class="pl-astable-col">2018-03-25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /教材管理 -->

    <!-- 弹窗:新增 -->
    <el-dialog title="教材新增/修改" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="章节编码：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="章节名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="类型:">
            <el-select style="width:100%;" placeholder="请选择类型">
              <el-option label="教材" value="1"></el-option>
              <el-option label="章节" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="知识点:">
            <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
            <div class="pl-ctrontree">
              <el-tree :data="dataKnowledge" :props="KnowledgeProps" show-checkbox></el-tree>
            </div>
          </el-form-item>
          <el-form-item label="状态:">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-form-item>
          <el-form-item label="章节描述:">
            <el-input type="textarea"></el-input>
            <p class="pl-charts">0/200</p>
          </el-form-item>
          <el-form-item label="创建时间:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="修改时间:">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="dialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:新增 -->
  </div>
</template>

<script>
  export default {
    name: 'plSystemBook',
    data() {
      return {
        data: [
          {
            name: '一年级语文',
            children: [
              {
                name: '第一章',
                children: [
                  {
                    name: '第一节 XXX'
                  },
                  {
                    name: '第二节 XXX'
                  }
                ]
              }
            ]
          },
          {
            name: '二年级语文',
            children: [
              {
                name: '第一章',
                children: [
                  {
                    name: '第一节 XXX'
                  },
                  {
                    name: '第二节 XXX'
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        dataKnowledge: [
          {
            name: 'xxx区',
            children: [
              {
                name: '中南讯智',
                children: [
                  {
                    name: 'xxx学校'
                  },
                  {
                    name: 'xxx学校'
                  }
                ]
              }
            ]
          },
          {
            name: 'xxx区',
            children: [
              {
                name: '中南讯智',
                children: [
                  {
                    name: 'xxx学校'
                  },
                  {
                    name: 'xxx学校'
                  }
                ]
              }
            ]
          }
        ],
        KnowledgeProps: {
          children: 'children',
          label: 'name'
        },
        dialogVisible: false
      }
    },
    methods: {
      handleDelete () {
        this.$confirm('确认要删除xxx?', '删除确认', {
          confirmButtonText: '确定',
          cancelButtonText: '关闭',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      }
    }
  }
</script>
