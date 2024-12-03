// pages/live_activity/live_activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 是否开启直播提醒
    isOpenLiveRemind: false,
    // 直播状态
    liveStatus: 1, // 0: 直播中 1: 直播预约
    // 倒计时
    countDown: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    // 剩余时间
    remainingTime: 0,
    // 定时器
    timer: null,
  },

  // 切换直播提醒状态
  switchLiveRemindStatus() {
    this.setData({
      isOpenLiveRemind: !this.data.isOpenLiveRemind,
    });
  },

  // 倒计时初始化
  initCountDown() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    let now = new Date().getTime()
    let target = new Date('2024/09/19 10:00:00').getTime()
    let distance = target - now
    this.setData({
      countDown: {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      },
      remainingTime: distance
    });
    console.log(this.data.remainingTime)
    // 每秒更新一次
    this.timer = setInterval(() => {
      this.initCountDown()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 随机状态
    // this.setData({
    //   liveStatus: Math.floor(Math.random() * 2),
    // });
    // 倒计时初始化
    // this.initCountDown()
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
    // 清除定时器
    clearInterval(this.timer)
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