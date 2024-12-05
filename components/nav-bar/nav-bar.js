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
    // 向上滚动后的背景色
    scrollBackground: {
      type: String,
      value: '#011638'
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
    // 是否开启上拉后背景色变化
    showScrollBackground: { type: Boolean, value: false },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
    navHeight: wx.getSystemInfoSync()['statusBarHeight'],
    // 上拉的高度
    pullUpHeight: 0,
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

      // 获取当前页面
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      currentPage.onPageScroll = (e)=>{
        // console.log(e);
        this.setData({
          pullUpHeight: e.scrollTop
        })
      }
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