const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


// 跳转页面
function myNavigateTo(url) {
  console.log('myNavigateTo', url);
  // 判断是否是 tabbar 页面
  const tabbarPages = [
    '/pages/index/index',
    '/pages/online_consult/online_consult',
    '/pages/activity/activity',
    '/pages/my/my',
    '/pages/offline_activity/offline_activity',
    '/pages/attendance_guide/attendance_guide',
    '/pages/related_data/related_data',
  ]

  if (tabbarPages.includes(url)) {
    wx.switchTab({
      url
    })
  } else {
    wx.navigateTo({
      url
    })
  }
}

/**
 * 取代系统自带的后退wx.navigateBack
 * @param string jump 后退跳过的路径
 */
const navigateBack = (jump) => {
  if (jump) {
    jump && (jump = jump.replace(/^\/|\/$/gm, ''));
  }

  var pagse = getCurrentPages()
  if (pagse.length == 1 || (jump && pagse.length == 2 && pagse[pagse.length - 2].route == jump)) {
    // wx.reLaunch({
    //   url: '/pages/index/index',
    // })

    const app = getApp()
    const tabbarPageStack = app.globalData.tabbarPageStack || []

    // 防止空数组访问
    if (!tabbarPageStack.length) {
      wx.reLaunch({
        url: '/pages/index/index' // 默认首页
      })
      return
    }

    // let recentlyTabbarPageStackPath = getApp().globalData.tabbarPageStack[getApp().globalData.tabbarPageStack.length - 1].url
    // 最近一次的tabbar页面
    let recentlyTabbarPageStackPath = tabbarPageStack[tabbarPageStack.length - 1]?.url
    // 当前页面
    const currentPagePath = '/' + pagse[pagse.length - 1].route
    
    // 如果最近一次的tabbar页面和当前页面相同，则将栈中最后一个元素删除
    if (recentlyTabbarPageStackPath === currentPagePath && tabbarPageStack.length > 1) {
      tabbarPageStack.pop()
      recentlyTabbarPageStackPath = tabbarPageStack[tabbarPageStack.length - 1]?.url // 重新获取最近一次的tabbar页面
    }
    wx.switchTab({
      url: recentlyTabbarPageStackPath,
    })

  } else {
    wx.navigateBack({
      delta: (jump && pagse.length == 2 && pagse[pagse.length - 2].route == jump) ? 2 : 1
    })
  }
}

module.exports = {
  formatTime,
  myNavigateTo,
  navigateBack
}
