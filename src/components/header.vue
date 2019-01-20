<template>
  <!-- 头部(搜索) -->
  <div class="pl-header">
    <div class="pl-header-inner">
      <router-link to="/"><img src="../assets/logo.png" /></router-link>
      <div class="pl-search">
        <el-input placeholder="请输入关键词搜索" v-model="searchText">
          <el-select v-model="type" slot="prepend" placeholder="请选择" style="width:80px;">
            <el-option label="试题" value="1"></el-option>
            <el-option label="试卷" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
  <!-- /头部(搜索) -->
</template>

<script>
  export default {
    name: 'plHeader',
    data() {
      return {
        type: '1',
        searchText: '',
      }
    }
  }
</script>
