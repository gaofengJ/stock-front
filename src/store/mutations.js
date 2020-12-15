import {
  LOADING,
  TOAST,
  PAGEREFRESH
} from './mutationTypes.js'

export default {
  [LOADING] (state, { value }) {
    state.loading = value
  },
  [TOAST] (state, { toastText, toastStatus, fn }) {
    state.toastText = toastText
    state.toastStatus = toastStatus
    fn && setTimeout(fn, 1500)
  },
  [PAGEREFRESH] (state, { page }) {
    state.refresh[page] = Date.now()
  }
}
