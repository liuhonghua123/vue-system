<template>
  <!-- 侧边浮动 -->
  <div class="pl-sidefloat">
    <div class="pl-sidefloat-left">
      <span>上传</span>
    </div>
    <div class="pl-sidefloat-body">
      <el-button type="info" @click="$router.push({ path: '/add-exam-question' })">新增试题</el-button>
      <el-button type="info" @click="$router.push({ path: '/template' })">上传试题</el-button>
      <el-button type="primary">上传试卷</el-button>
    </div>
  </div>
  <!-- /侧边浮动 -->
</template>

<script>
  export default {
    name: 'plSideFloat'
  }
</script>
