// components/pop-tip/pop-tip.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },

    isEmailFrom: {
      type: Boolean,
      value: false
    }

    // show: {
    //   type: Boolean,
    //   value: true
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel() {
      this.triggerEvent('cancel');
    },
    confirm() {
      this.triggerEvent('confirm');
    }
  }
})