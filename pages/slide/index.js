const  {px2rpx}=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight:'',
    height:'',
    sliderVal:0,
  },

  onLoad: function (options) {
    const that = this;
    const res = wx.getSystemInfoSync()
    // this.setData({
    //   scrollHeight: px2rpx(res.windowHeight) - 100
    // })
    var query = wx.createSelectorQuery();
    query.select('.text').boundingClientRect(function (rect) {
      console.log(rect.bottom)
      that.setData({
        height: rect.bottom - res.windowHeight
      })
    }).exec();
  },
  onPageScroll(e){
    const {height}=this.data;
    this.setData({
      sliderVal: e.scrollTop/height*100
    })
  },
  changeSlide(e){
    const { height } = this.data;
    const {value}=e.detail;
    wx.pageScrollTo ({
      scrollTop: value / 100 * height,
      duration:0
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})