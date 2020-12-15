let tmp = {}

// dev
if (__DEV__) {
  tmp = require('./dev/index').default
}
// test
if (__TEST__) {
  tmp = require('./test/index').default
}
// pre
if (__PRE__) {
  tmp = require('./pre/index').default
}
// online
if (__ONLINE__) {
  tmp = require('./online/index').default
}

export default tmp
