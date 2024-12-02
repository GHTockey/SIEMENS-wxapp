// pages/my/invite_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    tabsIndex: 0,
    tabsList: ['注册', '报名', '签到'],
    // 内容数据
    contentList: [
      {
        avatar: "../../static/def.png",
        nickname: "昵称",
        time: "2024-01-01 12:00:00",
        phone: "13800138000",
        otherInfo: "西门子 TIA 探厂记 —— 走进乐惠国际， 共启一罐啤酒的“新鲜”之旅",
        check: true
      },
      {
        avatar: "../../static/def.png",
        nickname: "昵称",
        time: "2024-01-01 12:00:00",
        phone: "13800138000",
        otherInfo: "西门子 TIA 探厂记 —— 走进乐惠国际， 共启一罐啤酒的“新鲜”之旅",
        check: false
      },
      {
        avatar: "../../static/def.png",
        nickname: "昵称",
        time: "2024-01-01 12:00:00",
        phone: "13800138000",
        otherInfo: "西门子 TIA 探厂记 —— 走进乐惠国际， 共启一罐啤酒的“新鲜”之旅",
        check: false
      }
    ],
    // 全选
    selectAll: false
  },

  // 切换tab
  changeTabs(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      tabsIndex: index
    })
  },
  // 选中内容
  selectContent(e) {
    const index = e.currentTarget.dataset.index
    this.data.contentList[index].check = !this.data.contentList[index].check
    this.setData({
      contentList: this.data.contentList
    })
  },
  // 全选
  selectAll() {
    this.data.selectAll = !this.data.selectAll
    this.setData({
      selectAll: this.data.selectAll
    })
    // 全选
    this.data.contentList.forEach(item => {
      item.check = this.data.selectAll
    })
    this.setData({
      contentList: this.data.contentList
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