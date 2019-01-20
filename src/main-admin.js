// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import './static/css/main.css'

// 引入库及应用配置
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/config/components'
import '@/config/directives'
import App from './app-admin'
import router from './router/admin'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
