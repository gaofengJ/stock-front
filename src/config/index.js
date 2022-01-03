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
// production
if (__ENV__ === 'production') {
  tmp = require('./production/index').default
}

export default tmp
