<template>
  <div class="pl-sidelayout-right">
    <!-- 积分明细 -->
    <div class="pl-card xp" style="min-height:640px;">
      <div class="pl-title">
        <span class="pl-title-label">答题卡</span>
      </div>

      <div style="margin-bottom:20px;">
        <button @click="$router.push('/answer-card')" type="button" class="el-button el-button--info el-button--medium"><span>新增</span></button>
      </div>

      <!-- 表格用法详见:http://element.eleme.io/#/zh-CN/component/table -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="编号" width="200"></el-table-column>
        <el-table-column label="答题卡名称">
          <template slot-scope="scope">
            <a>{{scope.row.name}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="制作时间" width="200"></el-table-column>
        <el-table-column prop="tools" label="操作" width="200">
          <template slot-scope="scope">
            <a>删除</a>
            <a>下载</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- /积分明细 -->
  </div>
</template>

<script>
  export default {
    name: 'plInfoAnswerCard',
    data() {
      return {
        tableData: [
          {
            name: '2018下学期期中考试',
            date: '2018-04-06'
          },
          {
            name: '2018下学期期未考试',
            date: '2018-04-06'
          },
          {
            name: '2018下学期单元测试',
            date: '2018-04-06'
          }
        ]
      }
    }
  }
</script>
