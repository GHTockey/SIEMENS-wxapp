// pages/my/part_activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 活动列表
    activityList: [
      {
        imgSrc: "../../static/1346.png",
        tag: "线上直播",
        title: "西门子 TIA 探厂记 —— 走进乐惠国际，共启一罐啤酒的“新鲜”之旅",
        date: "2022-06-01 12:00",
        selected: true,
      },
      {
        imgSrc: "../../static/1346.png",
        tag: "线下活动",
        title: "西门子工业4.0研讨会",
        date: "2022-07-15 09:00",
        selected: false,
        },
      {
        imgSrc: "../../static/1346.png",
        tag: "线上直播",
        title: "西门子数字化转型论坛",
        date: "2022-08-20 14:00",
        selected: false,
      },
      // {
      //   imgSrc: "../../static/1346.png",
      //   tag: "线下活动",
      //   title: "西门子智能制造体验日",
      //   date: "2022-09-10 10:00",
      //   selected: false,
      // }
    ],
    selectAll: false,
  },

  selectActivity(e) {
    const index = e.currentTarget.dataset.index;
    this.data.activityList[index].selected = !this.data.activityList[index].selected;
    this.setData({
      activityList: this.data.activityList,
    });
  },

  selectAll() {
    this.data.activityList.forEach(item => {
      item.selected = !this.data.selectAll;
    });
    this.setData({
      activityList: this.data.activityList,
      selectAll: !this.data.selectAll,
    });
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