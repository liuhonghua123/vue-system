<template>
  <div class="pl-sidelayout-right">
    <!-- 字典管理 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">字典管理</span>
      </div>
      <!-- 筛选区 -->
      <div class="twui-filter">
        <el-form :model="filterData" ref="filter" label-width="6em" :inline="true" >
          <el-form-item prop="dicType" label="字典类型:">
            <el-select size="medium" style="width:200px;" placeholder="请选择类型">
              <el-option label="类型1" value="1"></el-option>
              <el-option label="类型2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="dicName" label="字典项名称:">
            <el-input size="medium" style="width:200px;" v-model="filterData.templateName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium">查询</el-button>
            <el-button size="medium" @click="resetFilterForm">清除</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- /筛选区 -->
    </div>
    <!-- /字典管理 -->

    <!-- 表格内容 -->
    <div class="pl-card xp" v-pl-to-bottom="60">
      <div class="pl-btnarea">
        <el-button type="info" size="medium" @click="dialogVisible = true">新增</el-button>
        <el-button type="info" size="medium" @click="dialogVisible = true">修改</el-button>
        <el-button size="medium" @click="handleDelete">删除</el-button>
      </div>

      <!-- 表格用法详见:http://element.eleme.io/#/zh-CN/component/table -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="40" align="center"></el-table-column>
        <el-table-column prop="type" label="字典类型" width="120"></el-table-column>
        <el-table-column prop="description" label="字典说明"></el-table-column>
        <el-table-column prop="name" label="字典项名称" width="180"></el-table-column>
        <el-table-column prop="value" label="字典项值" width="120"></el-table-column>
        <el-table-column prop="status" label="状态" width="80"></el-table-column>
        <el-table-column prop="time" label="更新时间" width="120"></el-table-column>
      </el-table>

      <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
      <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- /表格内容 -->

    <!-- 弹窗:新增 -->
    <el-dialog title="字典项新增/修改" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="字典类型:">
            <el-select style="width:100%;" placeholder="请选择类型">
              <el-option label="类型1" value="1"></el-option>
              <el-option label="类型2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字典项名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="字典项值:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="排序:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="字典项描述:">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio label="启用"></el-radio>
            <el-radio label="不启用"></el-radio>
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
    name: 'plSystemDictionary',
    data() {
      return {
        filterData: {
          templateName: ''
        },
        tableData: [
          {
            type: '类型1',
            description: '描述1',
            name: '',
            value: '',
            status: '',
            time: '2018-03-25'
          }
        ],
        dialogVisible: false
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
      }
    }
  }
</script>
