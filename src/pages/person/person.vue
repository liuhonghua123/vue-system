<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left">
          <div class="pl-card">
            <ul class="pl-sidebar">
              <li class="pl-sidebar-title"><i class="pl-ico xuser"></i>帐户信息</li>
              <li><router-link class="pl-sidebar-link" to="/person/info">个人资料</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/password">修改密码</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/points">个人积分</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/notice">系统通知</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xtest"></i>试题</li>
              <li><router-link class="pl-sidebar-link" to="/person/exercise">我的试题</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/exercise-store">试题收藏</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/exercise-cart">试题篮</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xpeper"></i>试卷</li>
              <li><router-link class="pl-sidebar-link" to="/person/paper">我的试卷</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/paper-store">试卷收藏</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/download">下载记录</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/person/delete">删除记录</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xac"></i>答题卡</li>
              <li><router-link class="pl-sidebar-link" to="/person/answer-card">制作答题卡</router-link></li>
            </ul>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plSystem'
  }
</script>
