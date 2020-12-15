import {
  LOADING,
  TOAST,
  PAGEREFRESH
} from './mutationTypes.js'

export default {
  async loading ({ commit }, data) {
    await commit(LOADING, data)
  },
  async toast ({ commit }, data) {
    await commit(TOAST, data)
  },
  async pageRefresh ({ commit }, data) {
    await commit(PAGEREFRESH, data)
  }
}
