<template>
    <div id="app">
        <template v-if="$route.path!=='/answer-card'">
              <pl-topbar></pl-topbar>
              <pl-header></pl-header>
              <!-- 导航(老师) -->
              <div class="pl-nav">
                <ul class="pl-nav-inner">
                  <pl-subject-menu />
                  <li class="pl-nav-item"><router-link to="/home" class="pl-nav-link">首页</router-link></li>
                  <li class="pl-nav-item"><router-link to="/testpaper-store" class="pl-nav-link">试卷库</router-link></li>
                  <li class="pl-nav-item"><router-link to="/group-paper-manually" class="pl-nav-link">手动组卷</router-link></li>
                  <li class="pl-nav-item"><router-link to="/group-paper-auto" class="pl-nav-link">智能组卷</router-link></li>
                  <li class="pl-nav-item xright"><router-link to="/person" class="pl-nav-link"><i class="pl-ico xperson"></i>个人中心</router-link></li>
                </ul>
              </div>
              <!-- /导航(老师) -->
        </template>
    <!-- 内容视图 -->
    <router-view />
    <!-- /内容视图 -->
    <pl-footer :class="{xcard:$route.path==='/answer-card'}" />
  </div>
</template>

<script>
import Topbar from './components/topbar'
import Header from './components/header'
import SubjectMenu from './components/subject-menu'
import Footer from './components/footer'

export default {
    name: 'appTeacher',
    data() {
        return {
            searchText: '',
            type: ''
        }
    },
    components: {
        'pl-topbar': Topbar,
        'pl-header': Header,
        'pl-subject-menu': SubjectMenu,
        'pl-footer': Footer
    }
}
</script>