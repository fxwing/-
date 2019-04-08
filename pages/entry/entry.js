const {routers} = require('../../config/router')
Page({
  data: {
    showModal: false,
    showSkeleton: true,
    routers:[],
  },
  bindShowModal() {
    this.setData({
      showModal: true
    })
  },
  modalCancel() {
    console.log('点击了取消')
  },
  modalConfirm() {
    console.log('点击了确定')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    this.setData({ routers})
    setTimeout(() => {
      that.setData({
        showSkeleton: false
      })
    }, 2000)
  },

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