import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  // toast文本
  toastText: '',
  // toast状态
  toastStatus: 'warning',
  // loading提示文本
  loading: '',
  // 数据刷新
  refresh: {
  },
  // 用户信息
  user: {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
