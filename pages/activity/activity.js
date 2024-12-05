// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,
    // 是否订阅
    isSubscribe: false,
    // 日历
    isCalendar: false,
    // 活动列表
    activityList: [
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子 TIA 探厂记 —— 走进乐惠国际，共启一罐啤酒的“新鲜”之旅旅旅旅旅旅旅旅',
        date: '2023-01-01 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '2024 CSEAC 半导体行业展会',
        date: '2023-01-01 10:00',
        type: 'offline',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '西门子智能制造交流研讨会 （齐齐哈尔站）',
        date: '2023-01-01 10:00',
        type: 'offline',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: 'TIA 博途 · 点控未来 — 济南站',
        date: '2023-01-01 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子 TIA 探厂记',
        date: '2023-01-01 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '2024 CSEAC 半导体行业展会',
        date: '2023-01-01 10:00',
        type: 'offline',
        selected: false
      }
    ],

     // 活动类型数据
     allActivityData: ['全部类型', '线上活动', '线下活动'],
     // tab-全部活动是否开启
     allActivitySelected: false,
     // 当前选择的全部活动类型
     allActivityTypeIndex: null,
     // tab-日期选择器是否开启
     datePickerSelected: false,
     // 当前选择的年
     currentYear: 2024,
     // 当前选择的月
     currentMonth: 12,
     // 当前选择的 日 [高亮]
     currentDay: 1, // currentDate 每次变化，都要更新
     // 当前月份的天数 ({ Su：[1,8,15,22,29], Mo：[2,9,16,23,30], ... })
     currentMonthDays: {},
     // 调整后的星期顺序  按照顺序来排序，如：2025-1-1是周三(We)，那么We应该是在date-pop-tip-week-box排第一列
     adjustedWeekDays: [],
     // 确定选择的日期
     selectedDate: '',
 
     // 城市类型数据
     cityData: [
       '全部城市', '北京市', '天津市', 
       '河北省', '山东省', '江苏省', 
       '浙江省', '上海市', '内蒙古自治区', 
       '福建省', '江西省', '河南省', 
       '湖北省', '湖南省', '广东省', 
       // '广西壮族自治区', '海南省', '四川省', 
       // '贵州省', '云南省', '陕西省', 
       // '甘肃省', '青海省', '台湾省', 
       // '安徽省', '西藏自治区', '宁夏回族自治区', 
       // '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'
     ],
     // 当前选择的城市
     cityIndex: null,
     // 城市弹窗是否开启
     cityPopTipSelected: false,
  },


   // 选择活动类型
   selectAllActivityType(e) {
    let type = e.currentTarget.dataset.type;
    if (type === 'open') { // 打开
      this.setData({
        allActivitySelected: true
      });
    } else if (type === 'cancel') { // 取消
      this.setData({
        allActivitySelected: false,
        allActivityTypeIndex: 0
      });
    } else if (type === 'confirm') { // 确定
      this.setData({
        allActivitySelected: false
      });
      // 确定后调接口
      // ...
    } else {
      this.data.allActivityTypeIndex = type;
      this.setData({
        allActivityTypeIndex: this.data.allActivityTypeIndex
      });
    }
  },
  // 生成 currentMonthDays 数据
  generateCurrentMonthDays(year, month) {
    // 没有传值就 new 一个
    if (!year) {
      year = new Date().getFullYear();
    }
    if (!month) {
      month = new Date().getMonth() + 1;
    }

    let daysInMonth = new Date(year, month, 0).getDate(); // 获取当前月份的天数
    let firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 获取当前月份第一天是星期几
    let weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    // 调整 weekDays 顺序  
    let adjustedWeekDays = weekDays.slice(firstDayOfWeek).concat(weekDays.slice(0, firstDayOfWeek));

    let currentMonthDays = {
      Su: [], Mo: [], Tu: [], We: [], Th: [], Fr: [], Sa: []
    };

    // 遍历
    for (let day = 1; day <= daysInMonth; day++) {
      let date = new Date(year, month - 1, day);
      let dayOfWeek = date.getDay(); // 获取当前天数是星期几
      currentMonthDays[weekDays[dayOfWeek]].push(day); // 将当前天数添加到对应的星期数组中
    }

    this.setData({
      currentMonthDays: currentMonthDays,
      adjustedWeekDays: adjustedWeekDays // 保存调整后的星期顺序
    });
  },
  // 选择日期
  selectDate(e) {
    // updDay：更新当前选择的日   updMonth：更新当前选择的月   updYear：更新当前选择的年
    // next: 下个月   prev: 上个月    open: 打开弹窗    cancel: 关闭弹窗   confirm: 确定
    const type = e.currentTarget.dataset.type;
    if (type === 'updDay') {
      this.setData({
        currentDay: e.currentTarget.dataset.day
      });
    } else if (type === 'next') {
      if (this.data.currentMonth === 12) {
        this.setData({
          currentYear: this.data.currentYear + 1,
          currentMonth: 1
        });
      } else {
        this.setData({
          currentMonth: this.data.currentMonth + 1
        });
      }
    } else if (type === 'prev') {
      if (this.data.currentMonth === 1) {
        this.setData({
          currentYear: this.data.currentYear - 1,
          currentMonth: 12
        }); 
      } else {
        this.setData({
          currentMonth: this.data.currentMonth - 1
        });
      }
    } else if (type === 'open') {
      this.setData({
        datePickerSelected: true
      });
    } else if (type === 'cancel') {
      this.setData({
        datePickerSelected: false
      });
    } else if (type === 'confirm') {
      // console.log('确定');
      this.setData({
        selectedDate: `${this.data.currentYear}-${this.data.currentMonth < 10 ? '0' + this.data.currentMonth : this.data.currentMonth}-${this.data.currentDay < 10 ? '0' + this.data.currentDay : this.data.currentDay}`,
        datePickerSelected: false
      });
    }

    this.generateCurrentMonthDays(this.data.currentYear, this.data.currentMonth);
  },
  // 选择城市
  selectCityType(e){
    let type = e.currentTarget.dataset.type;
    if (type === 'open') { // 打开
      this.setData({
        cityPopTipSelected: true
      });
    } else if (type === 'cancel') { // 取消
      this.setData({
        cityPopTipSelected: false,
        cityIndex: 0
      });
    } else if (type === 'confirm') { // 确定
      this.setData({
        cityPopTipSelected: false
      });
      // 确定后调接口
      // ...
    } else {
      this.data.cityIndex = type;
      this.setData({
        cityIndex: this.data.cityIndex
      });
    }
  },

  // 切换订阅/日历
  switchSubscribeOrCalendar(e) {
    let type = e.currentTarget.dataset.type
    this.setData({
      [`is${type}`]: !this.data[`is${type}`]
    })
  },

  // 跳转页面
  myNavigateTo(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.generateCurrentMonthDays();
    // 更新 day
    this.selectDate({
      currentTarget: {
        dataset: { type: 'updDay', day: new Date().getDate() }
      }
    });
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