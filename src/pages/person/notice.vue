<template>
  <div class="pl-sidelayout-right">
    <!-- 系统通知 -->
    <div class="pl-card xp" style="min-height:640px;">
      <div class="pl-title">
        <span class="pl-title-label">系统通知</span>
      </div>

      <div class="pl-noticelist">
        <div class="pl-notice">
          <div class="pl-notice-title"><a class="pl-notice-title-body" @click="viewDetail">状态使用图标提示，未查看放在前面</a></div>
          <div class="pl-notice-info">
            <span>发送人：提交审批的人</span>
            <span>接收时间：2018-03-25 01:10</span>
          </div>
        </div>
        <div class="pl-notice xreaded">
          <div class="pl-notice-title"><a class="pl-notice-title-body" @click="viewDetail">已读信息请面是灰色的点</a></div>
          <div class="pl-notice-info">
            <span>发送人：提交审批的人</span>
            <span>接收时间：2018-03-25 01:10</span>
          </div>
        </div>
      </div>
    </div>
    <!-- /系统通知 -->
  </div>
</template>

<script>
  export default {
    name: 'plPersonNotice',
    methods: {
      viewDetail () {
        this.$router.push({path:'/artical'})
      }
    }
  }
</script>
