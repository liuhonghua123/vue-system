<template>
  <div class="pl-sidelayout-right">
    <!-- 内容筛选头部 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">用户管理</span>
      </div>
      <!-- 筛选区 -->
      <div class="twui-filter">
        <el-form :model="filterData" ref="filter" label-width="6em" :inline="true" >
          <el-form-item prop="roleName" label="角色名称:">
            <el-input size="medium" style="width:200px;" v-model="filterData.roleName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium">查询</el-button>
            <el-button size="medium" @click="resetFilterForm">清除</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- /筛选区 -->
    </div>
    <!-- /内容筛选头部 -->

    <!-- 表格内容 -->
    <div class="pl-card xp"  v-pl-to-bottom="60">
      <div class="pl-btnarea">
        <el-button type="info" size="medium" @click="dialogVisible = true">新增</el-button>
        <el-button type="info" size="medium" @click="dialogVisible = true">修改</el-button>
        <el-button size="medium" @click="handleDelete">删除</el-button>
      </div>

      <!-- 表格用法详见:http://element.eleme.io/#/zh-CN/component/table -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="40" align="center"></el-table-column>
        <el-table-column prop="roleId" label="角色编码" width="80"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="enableUpload" label="上传权限" width="80"></el-table-column>
        <el-table-column prop="enableDownload" label="下载权限" width="80"></el-table-column>
        <el-table-column prop="subjectLimit" label="学科限制" width="120"></el-table-column>
        <el-table-column prop="time" label="更新时间" width="160"></el-table-column>
      </el-table>

      <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
      <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- /表格内容 -->

    <!-- 弹窗:新增 -->
    <el-dialog title="角色新增/修改" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="角色编码:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="角色名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="菜单权限:">
            <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
            <div class="pl-ctrontree">
              <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" show-checkbox></el-tree>
            </div>
          </el-form-item>
          <el-form-item label="上传权限:">
            <!-- 单选框请加上v-model属性:http://element.eleme.io/#/zh-CN/component/radio -->
            <el-radio v-model="radioDemo" label="允许上传"></el-radio>
            <el-radio label="不允许上传"></el-radio>
          </el-form-item>
          <el-form-item label="下载权限:">
            <el-radio label="允许下载"></el-radio>
            <el-radio label="不允许下载"></el-radio>
          </el-form-item>
          <el-form-item label="学科限制:">
            <el-radio label="本学科"></el-radio>
            <el-radio label="全学科"></el-radio>
            <el-radio label="全学科"></el-radio>
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
    name: 'plSystemRole',
    data() {
      return {
        filterData: {
          roleName: ''
        },
        tableData: [
          {
            roleId: '001',
            roleName: '老师',
            enableUpload: '有',
            enableDownload: '有',
            subjectLimit: '本学科',
            time: ''
          }
        ],
        dialogVisible: false,
        data: [
          {
            roleName: '首页'
          },
          {
            roleName: '试题库',
            children: [
              {
                roleName: '试题库'
              },
              {
                roleName: '试题初审'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'roleName'
        },
        radioDemo: true
      }
    },
    methods: {
      resetFilterForm () {
        this.$refs.filter.resetFields()
      },
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
      },
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>
