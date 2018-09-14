/**
 * bottomShow组件
 *使用方法：
 * json:{
 *  "usingComponents":{
 *    "bottom-show":"../components/bottomShow/bottomShow"
 *  }
 * }
 *
 * wxml :<bottom-show
 *  title-name="123"
 * ></bottom-show>
 *
 */
Component({

  options: {
    multipleSlots: true // multiple多个的意思 支持多slot
  },
  properties: {
    //  在propreties中定义的字段用驼峰标识
    //  只有在wxml中使用的是 连字符的写法
    titleName: {
      type: String,
      value: 'default value'
    }
  },
  attached(){
    var animation = wx.createAnimation({
      duration: 400, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
  },
  data: {
    hideModal: true,
    animationData: {},
  },
  methods: {
    // 显示遮罩层
    showModal: function () {
      console.log(123)
      var that = this;
      that.setData({
        hideModal: false
      })
      setTimeout(function () {
        that.fadeIn(); //调用显示动画
      }, 200)
    },

    // 隐藏遮罩层
    hideModal: function () {
      var that = this;
      that.fadeDown(); //调用隐藏动画
      setTimeout(function () {
        that.setData({
          hideModal: true
        })
      }, 200) //先执行下滑动画，再隐藏模块
    },

    //动画集
    fadeIn: function () {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
      })
    },
    fadeDown: function () {
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export(),
      })
    },
  }
})
