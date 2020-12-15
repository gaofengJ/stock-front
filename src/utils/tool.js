// 判断类型
export function typeOf (value) {
  const typeStr = Object.prototype.toString.call(value)
  return typeStr.split(' ')[1].slice(0, typeStr.split(' ')[1].length - 1).toLowerCase()
}
