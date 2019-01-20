<template>
  <div class="pl-nodata">
    <img src="../static/images/nodata.png" alt="">
    <p><slot>暂无数据</slot></p>
  </div>
</template>

<script>
  export default {
    name:'plNoData'
  }
</script>
