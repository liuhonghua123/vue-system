<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-sidelayout">
        <div class="pl-sidelayout-left">
          <div class="pl-card">
            <ul class="pl-sidebar">
              <li class="pl-sidebar-title"><i class="pl-ico xpower"></i>权限管理</li>
              <li><router-link class="pl-sidebar-link" to="/system/user">用户管理</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/system/role">角色管理</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xtemplate"></i>模板管理</li>
              <li><router-link class="pl-sidebar-link" to="/system/template">模板管理</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xnotice"></i>公告管理</li>
              <li><router-link class="pl-sidebar-link" to="/system/notice">公告管理</router-link></li>
              <li class="pl-sidebar-title"><i class="pl-ico xsetting"></i>基础参数管理</li>
              <li><router-link class="pl-sidebar-link" to="/system/dictionary">字典项管理</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/system/knowledge">知识点管理</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/system/book">教材管理</router-link></li>
              <li><router-link class="pl-sidebar-link" to="/system/points">积分管理</router-link></li>
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
