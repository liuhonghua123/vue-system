<template>
  <div class="pl-sidelayout-right">
    <!-- 内容筛选头部 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">公告管理</span>
      </div>
      <!-- 筛选区 -->
      <div class="twui-filter">
        <el-form :model="filterData" ref="filter" label-width="6em" :inline="true" >
          <el-form-item prop="templateName" label="公告名称:">
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
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="creator" label="发布人" width="120"></el-table-column>
        <el-table-column prop="creationSchool" label="发布学校" width="180"></el-table-column>
        <el-table-column prop="creationDate" label="发布日期" width="120"></el-table-column>
        <el-table-column prop="status" label="状态" width="80"></el-table-column>
      </el-table>

      <!-- 分页用法详见:http://element.eleme.io/#/zh-CN/component/pagination -->
      <el-pagination class="pl-pagination" layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- /表格内容 -->

    <!-- 弹窗:新增 -->
    <el-dialog title="新增/修改通知公告" :visible.sync="dialogVisible" width="880px" height="680px" @close="handleAddDialogClose" @open="handleAddDialogOpen">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="公告标题:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="公告内容:">
            <div ref="editorBox" class="pl-editorbox">
              <!-- 富文本插件用法详见:http://ueditor.baidu.com/website/index.html -->
            </div>
          </el-form-item>
          <el-form-item label="附件:">
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
              <el-button size="small" type="primary">上传</el-button>
              <span slot="tip" class="el-upload__tip">说明文字说明文字说明文字说明文字</span>
            </el-upload>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox>是否发布</el-checkbox>
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
    name: 'plSystemNotice',
    data() {
      return {
        filterData: {
          templateName: ''
        },
        tableData: [
          {
            title: '公告标题',
            creator: '刘斌',
            creationSchool: '学校xxx',
            creationDate: '2018-03-25',
            status: '已发布'
          }
        ],
        dialogVisible: false,
        editor: null
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
      },
      // 新增弹窗打开时创建富文本插件
      handleAddDialogOpen () {
        const vm = this

        vm.$nextTick(()=>{
          if(vm.editor) return
          const editorEl = document.createElement('script')
          editorEl.setAttribute('id', 'editor')
          vm.$refs.editorBox.appendChild(editorEl)
          vm.editor = window.UM.getEditor('editor',{
            initialFrameWidth : 755,
            initialFrameHeight : 200,
            autoHeightEnabled: false
          })
        })
      }
    },
    beforeDestroy () {
      // 注销ueditor
      if (this.editor !== null) {
        this.editor.destroy()
      }
    }
  }
</script>
