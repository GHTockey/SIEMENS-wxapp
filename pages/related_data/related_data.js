// pages/related_data/related_data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    consultationList: [

      {
        imgSrc: '../../static/z2466.png',
        title: 'IM60 一体机 I/O 正式上市',
        date: '2023-01-01',
        selected: false
      },
      {
        imgSrc: '../../static/z2466.png',
        title: 'IM60 一体机 I/O 正式上市',
        date: '2023-01-01',
        selected: false
      },
      {
        imgSrc: '../../static/z2466.png',
        title: 'IM60 一体机 I/O 正式上市',
        date: '2023-01-01',
        selected: false
      }
    ],
    // 全选
    selectAll: false,
    // 滚动的距离
    scrollTop: 0
  },


  selectActivity(e) {
    const index = e.currentTarget.dataset.index;
    this.data.consultationList[index].selected = !this.data.consultationList[index].selected;
    this.setData({
      consultationList: this.data.consultationList
    });
  },
  selectAll() {
    this.data.selectAll = !this.data.selectAll;
    this.data.consultationList.forEach(item => {
      item.selected = this.data.selectAll;
    });
    this.setData({
      consultationList: this.data.consultationList,
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
    const selectedList = this.data.consultationList.filter(item => item.selected);
    if (selectedList.length === 0) {
      wx.showToast({
        title: '请选择要下载的数据',
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