// pages/activity_calendar/activity_calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    navHeight: wx.getSystemInfoSync().statusBarHeight + 44,

    // 日历 [瀑布流]
    isCalendar: false,
    // 活动列表
    activityList: [
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子 TIA 探厂记 —— 走进乐惠国际，共启一罐啤酒的“新鲜”之旅旅旅旅旅旅旅旅',
        date: '2024-12-10 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '2024 CSEAC 半导体行业展会',
        date: '2024-12-12 10:00',
        type: 'offline',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '西门子智能制造交流研讨会 （齐齐哈尔站）',
        date: '2024-11-16 10:00',
        type: 'offline',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: 'TIA 博途 · 点控未来 — 济南站',
        date: '2024-09-10 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1346.png',
        tag: '线上直播',
        title: '西门子 TIA 探厂记',
        date: '2024-01-01 10:00',
        type: 'online',
        selected: false
      },
      {
        imgSrc: '../../static/1434.png',
        tag: '线下活动',
        title: '2024 CSEAC 半导体行业展会',
        date: '2024-01-01 10:00',
        type: 'offline',
        selected: false
      }
    ],

    // 当前选择的年
    currentYear: 2024,
    // 当前选择的月
    currentMonth: 11,
    // 当前选择的 日 [高亮]
    currentDay: 1, // currentDate 每次变化，都要更新
    // 当前月份的天数 ({ Su：[1,8,15,22,29], Mo：[2,9,16,23,30], ... })
    currentMonthDays: {},
    // 调整后的星期顺序  按照顺序来排序，如：2025-1-1是周三(We)，那么We应该是在date-pop-tip-week-box排第一列
    adjustedWeekDays: [],
    // 确定选择的日期
    selectedDate: '',
    // 是否打开年份选择框
    isOpenYearSelectBox: false,
    // 是否打开月份选择框
    isOpenMonthSelectBox: false,
    // 年份数据
    yearData: [],
  },


  // 生成 currentMonthDays 数据
  generateCurrentMonthDays(year, month) {
    // 没有传值就 new 一个
    if (!year) {
      year = new Date().getFullYear();
      this.setData({ currentYear: year });
    }
    if (!month) {
      month = new Date().getMonth() + 1;
      this.setData({ currentMonth: month });
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
    } else if (type === 'updYear') {
      this.setData({
        currentYear: e.currentTarget.dataset.year,
        isOpenYearSelectBox: false
      });
    } else if (type === 'updMonth') {
      this.setData({
        currentMonth: e.currentTarget.dataset.month,
        isOpenMonthSelectBox: false
      });
    }

    // 更新日历
    this.generateCurrentMonthDays(this.data.currentYear, this.data.currentMonth);
  },
  // 打开/关闭年月下拉选择框
  openOrCloseYearMonthSelectBox(e) {
    let type = e.currentTarget.dataset.type;
    // 生成年份数据 当前年份前后10年
    if (type === 'Year') {
      // 根据 currentYear 生成数据
      let yearData = [];
      for (let i = -10; i <= 10; i++) {
        yearData.push(this.data.currentYear + i);
      }
      this.setData({
        yearData: yearData
      });
    }

    this.setData({
      [`isOpen${type}SelectBox`]: !this.data[`isOpen${type}SelectBox`]
    });
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
    // 瀑布流布局
    if (options.listLayout === 'calendar') {
      this.setData({
        isCalendar: true
      });
    }
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