import { Message } from 'element-ui'

export default {
  success(message, opt = {}) {
    Message({
      message: message,
      type: 'success',
      showClose: true,
      ...opt
    })
  },
  info(message, opt = {}) {
    Message({
      message: message,
      showClose: true,
      ...opt
    })
  },
  warning(message, opt = {}) {
    Message({
      message: message,
      type: 'warning',
      showClose: true,
      ...opt
    })
  },
  error(message, opt = {}) {
    Message({
      message: message,
      type: 'error',
      showClose: true,
      ...opt
    })
  },
  closeAll() {
    Message.closeAll()
  }
}
