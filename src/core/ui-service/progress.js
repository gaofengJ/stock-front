import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const progress = {
  start: () => {},
  done: () => {}
}

let pending = 0
nprogress.configure({ showSpinner: false })

progress.start = () => {
  pending++
  if (pending === 1) {
    nprogress.start()
  }
}
progress.done = () => {
  pending--
  if (pending === 0) {
    nprogress.done()
  }
}

export default progress
