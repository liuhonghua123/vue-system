<template>
  <div class="pl-sidelayout-right">
    <!-- 积分管理 -->
    <div class="pl-card xp"  v-pl-to-bottom="60">
      <div class="pl-title">
        <span class="pl-title-label">积分管理</span>
      </div>

      <!-- 表格用法详见:http://element.eleme.io/#/zh-CN/component/table -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" width="80" align="center" label="序号"></el-table-column>
        <el-table-column prop="description" label="积分说明"></el-table-column>
        <el-table-column prop="points" label="积分" width="160"></el-table-column>
        <el-table-column label="操作" width="180">
          <a slot-scope="props" @click="dialogVisible=true">修改</a>
          </el-table-column>
      </el-table>
    </div>
    <!-- /积分管理 -->

    <!-- 弹窗:积分修改 -->
    <el-dialog title="积分修改" :visible.sync="dialogVisible" width="500px">
      <div class="pl-dialogbody">
        <!-- 表单用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-form label-width="80px" size="medium">
          <el-form-item label="原积分:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="新积分:">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="dialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:积分修改 -->
  </div>
</template>

<script>
  export default {
    name: 'plSystemPoints',
    data() {
      return {
        tableData: [
          {
            description: '积分说明积分说明积分说明',
            points: 30
          }
        ],
        dialogVisible: false
      }
    }
  }
</script>
