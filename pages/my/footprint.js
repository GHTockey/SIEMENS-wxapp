// pages/my/footprint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 足迹列表
    footprintList: [
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子 TIA 探厂记 —— 走进乐惠国际，共启一罐啤酒的“新鲜”之旅',
        date: '2023-01-01',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线下活动',
        title: '2024 CSEAC 半导体行业展会',
        date: '2023-02-01',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子智能制造交流研讨会 （齐齐哈尔站）',
        date: '2023-03-01',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线下活动',
        title: 'TIA 博途 · 点控未来 — 济南站',
        date: '2023-04-01',
        selected: false
      }
    ],
    // 全选
    selectAll: false,
    // 弹窗
    showPopTip: false
  },

  selectActivity(e) {
    const index = e.currentTarget.dataset.index;
    this.data.footprintList[index].selected = !this.data.footprintList[index].selected;
    this.setData({
      footprintList: this.data.footprintList
    });
  },
  selectAll() {
    this.data.selectAll = !this.data.selectAll;
    this.data.footprintList.forEach(item => {
      item.selected = this.data.selectAll;
    });
    this.setData({
      footprintList: this.data.footprintList,
      selectAll: this.data.selectAll
    });
  },

  // 弹窗按钮事件
  popTipHandler(e) {
    // console.log(e);
    if (e.type === 'cancel') {
      this.setData({
        showPopTip: false
      });
    } else {
      console.log('确认');
    }
  },

  // 删除按钮事件
  deleteBtnHandler() {
    console.log('删除');

    this.setData({
      showPopTip: true
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