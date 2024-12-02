// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 常用功能
    commonFunctionList: [
      { icon: '../../static/my/2364.svg', title: '我的报名' },
      { icon: '../../static/my/2382.svg', title: '我的签到' },
      { icon: '../../static/my/2386.svg', title: '我的问卷' },
      { icon: '../../static/my/2369.svg', title: '我的消息' },
      { icon: '../../static/my/2377.svg', title: '我的收藏' },
      { icon: '../../static/my/2375.svg', title: '邀请好友' },
      { icon: '../../static/my/2361.svg', title: '在线咨询' },
      { icon: '../../static/my/2371.svg', title: '订阅消息' }
    ],
  },

  myNavigateTo(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // var appData = getApp().globalData
    // appData.activeIndex = 2
    // console.log(appData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})