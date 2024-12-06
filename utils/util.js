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
  wx.navigateTo({
    url
  })
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
