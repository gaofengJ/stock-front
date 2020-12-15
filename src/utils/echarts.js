import echarts from 'echarts'

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$echarts', {
      value: echarts
    })
  }
}
