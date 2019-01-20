<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-card" v-pl-to-bottom="80">
        <div class="pl-404">
          <img src="../../static/images/404.png" alt="">
          <div>找不到这个页面</div>
          <div>你可以回到<router-link to="/" class="pl-link"> 网站首页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;或者试试<a class="pl-link">搜索</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pl-404'
  }
</script>
