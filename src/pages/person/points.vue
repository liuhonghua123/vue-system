<template>
  <div class="pl-sidelayout-right">
    <!-- 积分统计 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">积分统计</span>
      </div>

      <div class="pl-grid xpc-x4 xsummary">
        <div class="pl-grid-col">
          <div class="pl-sumnum">960</div>
          <div>总积分</div>
        </div>
        <div class="pl-grid-col">
          <div class="pl-sumnum">960</div>
          <div>上传积分</div>
        </div>
        <div class="pl-grid-col">
          <div class="pl-sumnum">960</div>
          <div>下载积分</div>
        </div>
        <div class="pl-grid-col">
          <div class="pl-sumnum">960</div>
          <div>登录积分</div>
        </div>
      </div>
    </div>
    <!-- /积分统计 -->

    <!-- 积分明细 -->
    <div class="pl-card xp" style="min-height:408px;">
      <div class="pl-title">
        <span class="pl-title-label">积分明细</span>
      </div>

      <!-- 表格用法详见:http://element.eleme.io/#/zh-CN/component/table -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="description" label="积分说明"></el-table-column>
        <el-table-column prop="prise" label="奖励积分" width="200"></el-table-column>
        <el-table-column prop="nums" label="次数" width="200"></el-table-column>
        <el-table-column prop="total" label="总积分" width="200"></el-table-column>
      </el-table>
    </div>
    <!-- /积分明细 -->
  </div>
</template>

<script>
  export default {
    name: 'plPersonPoints',
    data() {
      return {
        tableData: [
          {
            description: '首次登录',
            prise: 20,
            nums: 20,
            total: 40
          }
        ]
      }
    },
  }
</script>
