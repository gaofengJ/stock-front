let tmp = {}

// dev
if (__ENV__ === 'dev') {
  tmp = require('./dev/index').default
}
// test
if (__ENV__ === 'test') {
  tmp = require('./test/index').default
}
// pre
if (__ENV__ === 'pre') {
  tmp = require('./pre/index').default
}
// online
if (__ENV__ === 'online') {
  tmp = require('./online/index').default
}

export default tmp
