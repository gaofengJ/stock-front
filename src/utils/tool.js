// 判断类型
export function typeOf (value) {
  const typeStr = Object.prototype.toString.call(value)
  return typeStr.split(' ')[1].slice(0, typeStr.split(' ')[1].length - 1).toLowerCase()
}

// 生成随机数
export function randomId (len) {
  len = len || 32
  const chars = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_'
  ]
  const charLen = chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += chars[Math.floor(Math.random() * charLen)]
  }
  return str
}
