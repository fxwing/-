const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const res = wx.getSystemInfoSync()
const px2rpx = (px) => 750 * px /res.screenWidth
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
} 
// 节流函数   一段时间执行一次
// 防抖函数   最后一次执行  

module.exports = {
  formatTime: formatTime,
  px2rpx
}
