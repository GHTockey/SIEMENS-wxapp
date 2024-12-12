// index.js
// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
// var appInstance = getApp()
// console.log(appInstance.globalData) // I am global data

// import { getBannerList, getProductLine, getRecommendList } from '../../utils/apis';
import request from '../../utils/apis';

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {
    //   avatarUrl: defaultAvatarUrl,
    //   nickName: '',
    // },
    // hasUserInfo: false,
    // canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    // canIUseNicknameComp: wx.canIUse('input.type.nickname'),

    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // tabs list data
    tabsList: [
      { title: 'TIA探厂记', date: '6月27日', place: '常州站' },
      { title: 'TIA博途', date: '7月1日', place: '直播' },
      { title: '智联未来', date: '6月27日', place: '苏州站' },
    ],
    // 当前选中的tab
    currentTab: 0,
    scrollIntoView: null,
    // 轮播图
    bannerList: [
      '../../static/swiper1.png',
      '../../static/swiper1.png',
      '../../static/swiper1.png',
    ],
    // 轮播图当前索引
    bannerIndex: 0,
    // 轮播图是否自动播放
    swiperAutoplay: true,
  },

  // 点击tab
  handleTabClick(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentTab: index,
      // 联动轮播图
      bannerIndex: index,
      // 轮播图是否自动播放
      swiperAutoplay: false
    })
  },

  // 轮播图动画结束 [重新开启自动播放]
  handleSwiperAnimationFinish() {
    this.setData({
      swiperAutoplay: true
    })
  },

  // 更新轮播图索引
  updateBannerIndex(e) {
    // console.log(e.detail.current)
    this.setData({
      bannerIndex: e.detail.current,
      scrollIntoView: `scrollIntoView-${e.detail.current}`,
    })
    this.setData({
      currentTab: e.detail.current,
    })
  },

  // 跳转页面
  navigateTo(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  async getProductLine() {
    let res = await request('/productLine/list')
    // console.log('/productLine/list res :' ,  res);
    this.setData({
      productLine: res.result.map((item) => {
        return {
          ...item,
          lineName: item.lineName.split('/')[1], // [sss,中中中][1]
          lineEnName: item.lineName.split('/')[0], // [sss,中中中][0]
          miniAppLink: item.miniAppLink.split('@')[0],
          miniAppPage: item.miniAppLink.split('@')[1],
        }
      })
    })
  },

  onLoad() {
    // 获取产品线数据 [按钮]
    this.getProductLine()

    // 获取精彩推荐数据
    // getRecommendList((recommendList) => {
    //   console.log('recommendList', recommendList)
    //   this.setData({
    //     recommendList: recommendList
    //   })
    // })
  },

  onShow() {
    getApp().updateTabbarPageStack('/pages/index/index')
  }
})

