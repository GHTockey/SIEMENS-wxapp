// component/customNavigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background: {
      type: String,
      value: 'transparent'
    },
    title: {
      type: String,
      value: '自定义头部'
    },
    textColor: {
      type: String,
      value: '#fff'
    },

    // 是否显示搜索图标
    showFindIcon: { type: Boolean, value: false },
    // 是否显示返回图标
    showBackIcon: { type: Boolean, value: false },
    // 是否显示标题
    showTitle: { type: Boolean, value: true },
    // 标题的位置
    titlePosition: { type: String, value: 'center' },
    // 是否显示logo
    showLogo: { type: Boolean, value: false },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
    navHeight: wx.getSystemInfoSync()['statusBarHeight'],
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {

      // 在组件实例进入页面节点树时执行
      const menuButtonRect = wx.getMenuButtonBoundingClientRect()
      var navHeight = (menuButtonRect.top - this.data.statusBarHeight) * 2 + menuButtonRect.height
      this.setData({
        navHeight
      })
    },
    moved: function () { },
    detached: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      wx.navigateBack()
      // wx.navigateBack({
      //   delta: 1
      // });
    },
    find() {
      console.log('find')
    }
  }
})