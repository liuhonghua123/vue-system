<template>
  <div id="app">
    <pl-topbar></pl-topbar>
    <pl-header></pl-header>

    <!-- 导航(管理员) -->
    <div class="pl-nav">
      <ul class="pl-nav-inner">
        <pl-subject-menu />
        <li class="pl-nav-item"><router-link to="/home" class="pl-nav-link">首页</router-link></li>
        <li class="pl-nav-item">
          <router-link to="/exercise" class="pl-nav-link" :class="{xactive:$route.path.indexOf('exercise')!==-1}">试题库<i class="pl-triangle xdown"></i></router-link>
          <div class="pl-nav-menu">
            <router-link class="pl-nav-menu-link" to="/exercise-store">试题库</router-link>
            <router-link class="pl-nav-menu-link" to="/exercise-first-check">初审试题</router-link>
            <router-link class="pl-nav-menu-link" to="/exercise-final-check">终审试题</router-link>
            <router-link class="pl-nav-menu-link" to="/exercise-remove-duplication">试题排重</router-link>
          </div>
        </li>
        <li class="pl-nav-item">
          <router-link to="/testpaper-store" class="pl-nav-link" :class="{xactive:$route.path.indexOf('testpaper')!==-1}">试卷库<i class="pl-triangle xdown"></i></router-link>
          <div class="pl-nav-menu">
            <router-link class="pl-nav-menu-link" to="/testpaper-store">试卷库</router-link>
            <router-link class="pl-nav-menu-link" to="/testpaper-first-check">初审试卷</router-link>
            <router-link class="pl-nav-menu-link" to="/testpaper-final-check">终审试卷</router-link>
            <router-link class="pl-nav-menu-link" to="/testpaper-custom">个性化试卷</router-link>
          </div>
        </li>
        <li class="pl-nav-item"><router-link to="/group-paper-auto" class="pl-nav-link">智能组卷</router-link></li>
        <li class="pl-nav-item xright"><router-link to="/person" class="pl-nav-link"><i class="pl-ico xperson"></i>个人中心</router-link></li>
      </ul>
    </div>
    <!-- /导航(管理员) -->

    <!-- 内容视图 -->
    <router-view />
    <!-- /内容视图 -->
    <pl-footer />
  </div>
</template>

<script>
import Topbar from './components/topbar'
import Header from './components/header'
import SubjectMenu from './components/subject-menu'
import Footer from './components/footer'

export default {
  name: 'appAdmin',
  components: {
    'pl-topbar': Topbar,
    'pl-header': Header,
    'pl-subject-menu': SubjectMenu,
    'pl-footer': Footer
  }
}
</script>

