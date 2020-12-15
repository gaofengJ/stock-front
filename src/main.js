import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import '@babel/polyfill'
import ElementUI from 'element-ui'
import Echarts from './utils/echarts'
import '@/styles/css/common.scss'
import '@/styles/css/element-variables.scss'
import '@/styles/css/iconfont.scss'
// global components
import './components/index'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Echarts)

// 通用过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
