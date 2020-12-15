// 是否支持storage
function isStorageSupported () {
  let isStorageSupportedFlag = false
  const testKey = 'test'
  const storage = window.localStorage
  try {
    storage.setItem(testKey, 'testValue')
    storage.removeItem(testKey)
    isStorageSupportedFlag = true
  } catch (err) {
    isStorageSupportedFlag = false
  }
  return isStorageSupportedFlag
}

// 设置storage
function setItem (key, value) {
  if (!isStorageSupported()) return
  localStorage.setItem(key, value)
}

// 获取storage
function getItem (key) {
  if (!isStorageSupported()) return
  return localStorage.getItem(key)
}

// 删除storage
function removeItem (key) {
  if (!isStorageSupported()) return
  localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
