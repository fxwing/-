const path = (text) => `/pages/${text}/index`
const routers = [
  {
    text: '视频发弹幕',
    path: path('video')
  },
  {
    text: '小程序原生动画底部弹出',
    path: path('bottomShow')
  }, {
    text: '上传多张图片',
    path: path('test')
  }, {
    text: '左滑删除',
    path: path('slideRemove')
  }, {
    text: '手写签名',
    path: path('sign')
  }, {
    text: '吸顶',
    path: path('static')
  },
  {
    text: '滑动文章进度',
    path: path('slide')
  },
  {
    text: '封装全局状态响应管理和components通信',
    path: path('store')
  }, {
    text: '图片的瀑布流',
    path: path('flow')
  }, {
    text: '横屏字幕滚动',
    path: path('subtitle')
  }, {
    text: '左侧弹出',
    path: path('left-show')
  },
  {
    text: '图片剪裁',
    path: path('img-cropper')
  },
  {
    text: '上拉刷新和无限滚动',
    path: path('infiniteScroll')
  }]
module.exports = {
  routers
}