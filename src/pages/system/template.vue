<template>
  <div class="pl-sidelayout-right">
    <!-- 内容筛选头部 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">模板管理</span>
      </div>
      <!-- 筛选区 -->
      <div class="twui-filter">
        <el-form :model="filterData" ref="filter" label-width="6em" :inline="true" >
          <el-form-item prop="templateName" label="模板名称:">
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
        <el-table-column prop="templateId" label="模板编码" width="80"></el-table-column>
        <el-table-column prop="templateName" label="模板名称"><a slot-scope="scope">{{ scope.row.templateName }}</a></el-table-column>
        <el-table-column prop="learningSection" label="学段" width="80"></el-table-column>
        <el-table-column prop="subject" label="科目" width="120"></el-table-column>
        <el-table-column prop="isDefault" label="是否默认" width="80"></el-table-column>
        <el-table-column prop="time" label="更新时间" width="160"></el-table-column>
      </el-table>

      <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
      <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- /表格内容 -->

    <!-- 弹窗:新增 -->
    <el-dialog title="模板新增/修改" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="模板编码:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="模板名称:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="适用学段:">
            <el-select style="width:100%;" placeholder="请选择学段">
              <el-option label="小学" value="1"></el-option>
              <el-option label="初中" value="2"></el-option>
              <el-option label="高中" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="适用科目:">
            <el-select style="width:100%;" placeholder="请选择科目">
              <el-option label="语文" value="1"></el-option>
              <el-option label="数学" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="模板文件:">
            <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed">
              <el-button size="small" type="primary">选择模板</el-button>
              <span slot="tip" class="el-upload__tip">说明文字说明文字说明文字说明文字</span>
            </el-upload>
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
    name: 'plSystemTemplate',
    data() {
      return {
        filterData: {
          templateName: ''
        },
        tableData: [
          {
            templateId: '001',
            templateName: '默认版本',
            learningSection: '',
            subject: '有',
            isDefault: '',
            time: ''
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
      },
      // 文件上传相关方法demo
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
