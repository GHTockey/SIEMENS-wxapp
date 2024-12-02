// pages/my/questionnaire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 问卷列表
    questionnaireList: [
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
      }
    ],
    // 全选
    selectAll: false,
    // 弹窗
    showPopTip: false
  },

  selectActivity(e) {
    const index = e.currentTarget.dataset.index;
    this.data.questionnaireList[index].selected = !this.data.questionnaireList[index].selected;
    this.setData({
      questionnaireList: this.data.questionnaireList
    });
  },
  selectAll() {
    this.data.selectAll = !this.data.selectAll;
    this.data.questionnaireList.forEach(item => {
      item.selected = this.data.selectAll;
    });
    this.setData({
      questionnaireList: this.data.questionnaireList,
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

    // 判断是否选择了数据
    const selectedList = this.data.questionnaireList.filter(item => item.selected);
    if (selectedList.length === 0) {
      wx.showToast({
        title: '请选择要删除的数据',
        icon: 'none'
      });
      return;
    }

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