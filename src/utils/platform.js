// 获取平台信息
function getPlatform () {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return 'mobile'
  }
  return 'pc'
}
// 设置系统信息
function setSystemInfo () {
  const UAParser = require('ua-parser-js')
  const parser = new UAParser()
  parser.setUA(navigator.userAgent)
  const platformName = parser.getBrowser().name
  const platformVersion = parser.getBrowser().version
  const appName = ''
  const appVersion = '1.5.4'
  /* eslint-disable-next-line */
  config.systemInfo = {
    platformName,
    platformVersion,
    appName,
    appVersion
  }
}

// 获取系统信息
function getSystemInfo () {
  const UAParser = require('ua-parser-js')
  const parser = new UAParser()
  parser.setUA(navigator.userAgent)
  const platformName = parser.getBrowser().name
  const platformVersion = parser.getBrowser().version
  const appName = 'systemProject'
  const appVersion = '1.0.0'
  return {
    platformName,
    platformVersion,
    appName,
    appVersion
  }
}

// 判断是不是低版本IE浏览器
function isLowIE () {
  const { platformName, platformVersion } = getSystemInfo()
  return platformName === 'IE' && platformVersion < 9 // todo 改回11
}

export default {
  getPlatform,
  setSystemInfo,
  getSystemInfo,
  isLowIE
}
