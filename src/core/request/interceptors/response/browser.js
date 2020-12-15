// import common from '@core/common'
import uiService from '@core/ui-service'
import _ from 'lodash'
export default [
  response => {
    if (response && response.config && response.config.showProgress) {
      uiService.progress.done()
    }
    if (response.status === 200 && response.data && response.data.status === 2) {
      if (response.config.showError) {
        uiService.toastr.error(response.data.message || '系统开小差了，请稍后再试')
      }
      return Promise.reject(response.data)
    }
    return _.get(response, 'data.data') || {}
  },
  error => {
    // progesss
    // console.log('obj:' + JSON.stringify(error.response, null, '\t'))
    if (error && error.config && error.config.showProgress) {
      uiService.progress.done()
    }

    const err = {
      status: 500,
      errcode: '',
      message: (error.response && error.response.data && error.response.data.message) || error.message || '未知错误',
      stack: error.stack || ''
    }

    if (error && error.response && +error.response.status === 401) {
      err.status = 401
      err.message = '账号信息已过期，请重新登录'
      window.location = '/login'
    }

    if (error && error.response && +error.response.status === 403) {
      err.status = 403
      err.message = '当前账号无权限登陆'
      window.location = '/login'
    }

    if (error && error.response && +error.response.status === 404) {
      err.status = 404
      err.message = '您请求的资源不存在'
    }

    if (error && error.config && error.config.showError) {
      if (error.message === 'Network Error') {
        err.message = '网络错误<br />请检查网络连接是否正常'
      }
    }
    setTimeout(() => {
      uiService.toastr.error(err.message || '系统开小差了，请稍后再试', '错误', { dangerouslyUseHTMLString: true })
    })

    return Promise.reject(err)
  }
]
