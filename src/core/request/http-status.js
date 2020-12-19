const httpStatusCode = {
  // 1xx
  105: '用户未登录',
  // 4xx
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  // 5xx
  500: '系统内部错误'
}

const getError = (statusCode) => {
  if (httpStatusCode[`${statusCode}`]) {
    const error = new Error(httpStatusCode[`${statusCode}`])
    error.status = +statusCode
    return error
  }
  return null
}

export default {
  getError
}
