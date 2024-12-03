// pages/online_consult/online_consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 聊天对话
    chatDialogList: [
      {
        id: 1,
        sender: 'user',
        message: '你好，请问产品选型怎么做？',
        timestamp: '2023-01-01 10:00:00'
      },
      {
        id: 2,
        sender: 'support',
        message: '您好，您可以提供一些具体需求吗？',
        timestamp: '2023-01-01 10:01:00'
      },
      {
        id: 3,
        sender: 'user',
        message: '我需要一个适用于工业自动化的控制器。',
        timestamp: '2023-01-01 10:02:00'
      },
      {
        id: 4,
        sender: 'support',
        message: '好的，我们推荐您使用西门子的S7-1500系列控制器。',
        timestamp: '2023-01-01 10:03:00',
        type: 'link',
        link: 'https://www.baidu.com'
      },
    ],
    // 输入框
    inputValue: '',
  },


  // 输入事件
  // inputEvent(e) {
  //   // console.log(e.detail.value);
  //   this.setData({
  //     inputValue: e.detail.value
  //   })
  // },
  // 发送事件
  sendEvent(e) {
    console.log(e.detail.value);
    this.setData({
      chatDialogList: [...this.data.chatDialogList, {
        id: this.data.chatDialogList.length + 1,
        sender: 'user',
        message: e.detail.value,
      }],
      inputValue: '' // 清空输入框
    })
    // 往下拉
    wx.pageScrollTo({
      scrollTop: 10000,
      duration: 300
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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