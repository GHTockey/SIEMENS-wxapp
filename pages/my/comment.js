// pages/my/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 评论列表
    commentList: [
      {
        date: '2024-09-10 12:00',
        title: '活动举办成功',
        desc: '西门子 TIA 探厂记 —— 走进乐惠国际， 共启一罐啤酒的“新鲜”之旅',
        selected: true
      },
      {
        date: '2024-09-11 14:00',
        title: '活动圆满结束',
        desc: '2024 CSEAC 半导体行业展会',
        selected: false
      },
      {
        date: '2024-09-11 14:00',
        title: '很棒的体验',
        desc: 'TIA 博途 · 点控未来 - 济南站',
        selected: false
      },
    ],
  },

  // 切换评论状态
  switchCommentStatus(e) {
    const index = e.currentTarget.dataset.index;
    this.data.commentList[index].selected = !this.data.commentList[index].selected;
    this.setData({
      commentList: this.data.commentList
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