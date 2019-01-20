<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <ul class="pl-crm">
        <li><router-link to="/person">个人中心</router-link></li>
        <li><router-link to="/person/notice">系统通知</router-link></li>
        <li>详情</li>
      </ul>

      <div class="pl-card"  v-pl-to-bottom="60">
        <div class="pl-artical">
          <h3 class="pl-artical-title">系统通知</h3>

          <div class="pl-artical-info">
            <span>发送人：提交审批的人</span>
            <span>接收时间：2018-03-25 01:10</span>
          </div>

          <div class="pl-artical-body">
              通知内容区域
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plArtical'
  }
</script>
