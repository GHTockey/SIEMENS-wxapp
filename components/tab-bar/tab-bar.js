// components/tab-bar/tab-bar.js

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
    list: [{
      "selectedIconPath": "../../static/home-active.svg",
      "iconPath": "../../static/home.svg",
      "path": "/pages/index/index",
      "text": "首页"
    },
    {
      "selectedIconPath": "../../static/huodong-active.svg",
      "iconPath": "../../static/huodong.svg",
      "path": "/pages/activity/activity",
      "text": "活动"
    },
    {
      "selectedIconPath": "../../static/zixun-active.svg",
      "iconPath": "../../static/zixun.svg",
      "path": "/pages/consult/consult",
      // "path": "/pages/online_consult/online_consult",
      "text": "咨询"
    },
    {
      "selectedIconPath": "../../static/my-active.svg",
      "iconPath": "../../static/my.svg",
      "path": "/pages/my/my",
      "text": "我的"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab
    changeActive(e) {
      const index = e.currentTarget.dataset.index;
      // var appData = getApp().globalData
      // appData.activeIndex = index
      // this.setData({
      //   activeIndex: index
      // })
      
      // 判断是否是当前页面
      if (index === this.data.activeIndex) {
        return
      }

      this.updateActiveIndex(index)
      wx.redirectTo({
        url: this.data.list[index].path
      })
    },
    // 更新 activeIndex
    updateActiveIndex(newIndex) {
      var appData = getApp().globalData
      if (newIndex !== undefined) {
        appData.activeIndex = newIndex
        this.setData({
          activeIndex: newIndex
        })
      } else {
        this.setData({
          activeIndex: appData.activeIndex
        })
      }
    }
  },

  // 组件数据字段监听器 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
  observers: {
    // 语法： '变量名称': function(value){}
  },
  // 组件的生命周期声明对象 [attached:在组件实例进入页面节点树时执行] [detached:在组件实例被从页面节点树移除时执行]
  lifetimes: {
    // 语法：生命周期名称: function(){}
    attached() {
      // var appData = getApp().globalData
      // this.setData({
      //   activeIndex: appData.activeIndex
      // })
      this.updateActiveIndex()
    }
  },
  // 组件所在页面的生命周期对象 [show: 页面被展示] [hide] [resize:页面尺寸变化]
  // pageLifetimes：{}
})