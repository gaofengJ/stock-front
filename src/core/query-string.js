import qs from 'qs'
import router from '../router'

const options = {
  allowPrototypes: true,
  encodeValuesOnly: true,
  sort: (a, b) => a.localeCompare(b), // parameter display sequence by A-Z
  allowDots: true,
  arrayFormat: 'brackets'
}

const parse = val => qs.parse(val, options)

const stringify = query => qs.stringify(query, options)

const query = () => {
  return router.currentRoute.query // compatible for Vue
}

export {
  options,
  parse,
  stringify,
  query
}

export default {
  options,
  parse,
  stringify,
  query
}
