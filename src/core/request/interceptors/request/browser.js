import uiService from '@core/ui-service'

export default [
  config => {
    if (config.showProgress !== false) {
      config.showProgress = true
      uiService.progress.start()
    }
    if (config.showError !== false) {
      config.showError = true
    }
    return config
  },
  error => {
    if (error && error.config && error.config.showProgress) {
      uiService.progress.done()
    }
    if (error && error.config && error.config.showError) {
      uiService.toastr.error('请求错误', '错误')
    }
    return Promise.reject(error)
  }
]
