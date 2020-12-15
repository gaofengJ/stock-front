import axios from 'axios'
import queryString from '../query-string'
import config from '../../config/index'

const [requestResolve, requestReject] = require('./interceptors/request/browser').default
const [responseResolve, responseReject] = require('./interceptors/response/browser').default

const _setupInterceptors = axios => {
  axios.interceptors.request.use(requestResolve, requestReject)
  axios.interceptors.response.use(responseResolve, responseReject)
}

const createRequest = (type, showLoading = true, headers = {}) => {
  axios.defaults.headers = Object.assign({
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest'
    // token: common.getToken()
  }, headers)

  const clientRequest = axios.create({
    baseURL: config[type],
    paramsSerializer: function(params) {
      return queryString.stringify(params)
    },
    timeout: 60000
  })

  _setupInterceptors(clientRequest)

  return clientRequest
}

export default createRequest
