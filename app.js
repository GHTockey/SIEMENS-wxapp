// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    activeIndex: 0,
    // tabbar 页面栈 [用于返回] type => url[]
    tabbarPageStack: [],

    regionTree: [
      { id: 0, name: "全部城市" },
      { id: 1, pid: 0, name: "北京市", type: 1, code: 110000 },
      { id: 2, pid: 0, name: "天津市", type: 1, code: 120000 },
      { id: 3, pid: 0, name: "河北省", type: 1, code: 130000 },
      { id: 4, pid: 0, name: "山西省", type: 1, code: 140000 },
      { id: 5, pid: 0, name: "内蒙古自治区", type: 1, code: 150000 },
      { id: 6, pid: 0, name: "辽宁省", type: 1, code: 210000 },
      { id: 7, pid: 0, name: "吉林省", type: 1, code: 220000 },
      { id: 8, pid: 0, name: "黑龙江省", type: 1, code: 230000 },
      { id: 9, pid: 0, name: "上海市", type: 1, code: 310000 },
      { id: 10, pid: 0, name: "江苏省", type: 1, code: 320000 },
      { id: 11, pid: 0, name: "浙江省", type: 1, code: 330000 },
      { id: 12, pid: 0, name: "安徽省", type: 1, code: 340000 },
      { id: 13, pid: 0, name: "福建省", type: 1, code: 350000 },
      { id: 14, pid: 0, name: "江西省", type: 1, code: 360000 },
      { id: 15, pid: 0, name: "山东省", type: 1, code: 370000 },
      { id: 16, pid: 0, name: "河南省", type: 1, code: 410000 },
      { id: 17, pid: 0, name: "湖北省", type: 1, code: 420000 },
      { id: 18, pid: 0, name: "湖南省", type: 1, code: 430000 },
      { id: 19, pid: 0, name: "广东省", type: 1, code: 440000 },
      { id: 20, pid: 0, name: "广西壮族自治区", type: 1, code: 450000 },
      { id: 21, pid: 0, name: "海南省", type: 1, code: 460000 },
      { id: 22, pid: 0, name: "重庆市", type: 1, code: 500000 },
      { id: 23, pid: 0, name: "四川省", type: 1, code: 510000 },
      { id: 24, pid: 0, name: "贵州省", type: 1, code: 520000 },
      { id: 25, pid: 0, name: "云南省", type: 1, code: 530000 },
      { id: 26, pid: 0, name: "西藏自治区", type: 1, code: 540000 },
      { id: 27, pid: 0, name: "陕西省", type: 1, code: 610000 },
      { id: 28, pid: 0, name: "甘肃省", type: 1, code: 620000 },
      { id: 29, pid: 0, name: "青海省", type: 1, code: 630000 },
    ],
  },

  updateTabbarPageStack(currentPagePath) {
    // console.log('updateTabbarPageStack', this);
    if (!currentPagePath) return

    // 如果已存在，删除
    this.globalData.tabbarPageStack = this.globalData.tabbarPageStack.filter(item => item.url != currentPagePath)
    // 入栈
    this.globalData.tabbarPageStack.push({ url: currentPagePath, type: 'tabbar' })
    console.log(this.globalData.tabbarPageStack)
  }
})

