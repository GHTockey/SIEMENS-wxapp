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
const navigateBack = (jump) => {
    if (jump) {
      jump && (jump = jump.replace(/^\/|\/$/gm, ''));
    }
  
    var pagse = getCurrentPages()
    if (pagse.length == 1 || (jump && pagse.length == 2 && pagse[pagse.length - 2].route == jump)) {
      wx.reLaunch({
        url:'/pages/index/index',
      })
    } else {
      wx.navigateBack({
        delta: (jump && pagse.length == 2 && pagse[pagse.length - 2].route == jump) ? 2 : 1
      })
    }
  }

module.exports = {
  formatTime,
  myNavigateTo,
  navigateBack
}
