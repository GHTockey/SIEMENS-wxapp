// pages/my/personal_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 是否是西门子员工
    isSiemensEmployee: '0',
    // 隐私协议是否同意
    isPrivacyAgreementAgreed: false,
    // 公司类型
    selectedCompanyType: '',
    companyTypeArray: [
      '盘柜厂', '总包商', '系统集成商'
    ],
    // 所属行业
    selectedIndustry: '',
    industryArray: [
      '食品饮料', '农业', '半导体行业', '汽车行业', '其他'
    ],
    // 职位
    selectedPosition: '',
    positionArray: [
      '管理人员', '技术', '市场', '采购', '其他'
    ],
    region: [],
  },

  updateRadio(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      isSiemensEmployee: value,
    });
  },

  updatePrivacyAgreement(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      isPrivacyAgreementAgreed: !this.data.isPrivacyAgreementAgreed,
    });
  },

  // 跳转页面
  navigateTo(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },
  // 选择公司类型
  handlePickerChange(e) {
    let value = e.detail.value;
    let type = e.currentTarget.dataset.type;
    if (type == 'companyType') { // 公司类型
      this.setData({
        selectedCompanyType: this.data.companyTypeArray[value],
      });
    } else if (type == 'industry') { // 所属行业
      this.setData({
        selectedIndustry: this.data.industryArray[value],
      });
    } else if (type == 'position') { // 职位
      this.setData({
        selectedPosition: this.data.positionArray[value],
      });
    }
  },

  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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