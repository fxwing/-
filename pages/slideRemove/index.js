

const app = getApp();

Page({
  data: {
    startX: 0, // 开始坐标
    startY: 0,
    endX: 0,
    endY: 0,
    scrollY: true,
    isSelect: false,
    isConfirm: false,
    visible: false,
    delInfo: {
      addressid: null,
      index: null,
    },
    isIphoneX: false,
    items: [{
      content: 1,
      isTouchMove: false,
    }, {
      content: 1,
      isTouchMove: false,
    }, {
      content: 1,
      isTouchMove: false,
    }, {
      content: 1,
      isTouchMove: false,
    }, {
      content: 1,
      isTouchMove: false,
    }, {
      content: 1,
      isTouchMove: false,
    }]
  },
  //  手指触摸动作开始 记录起点X坐标
  touchstart(e) {
    //  开始触摸时 重置所有删除
    this.data.items.forEach((v) => {
      if (v.isTouchMove) {
        v.isTouchMove = false;
      }
    });
    this.setData({
      startX: e.changedTouches[0].pageX,
      startY: e.changedTouches[0].pageY,
      // items: this.data.items,
    });
  },
  //  滑动事件处理
  touchmove(e) {
    const that = this;
    const {
      index,
    } = e.currentTarget.dataset; // 当前索引
    this.setData({
      endX: e.changedTouches[0].pageX,
      endY: e.changedTouches[0].pageY,
    });
    const direction = this.getSlideDirection(this.data.startX, this.data.startY, this.data.endX, this.data.endY);
    that.data.items.forEach((v, i) => {
      v.isTouchMove = false;
      if (i === index) {
        if (direction == 3) {
          v.isTouchMove = true;
          this.setData({
            scrollY: false,
          });
        } else if (direction == 4) {
          v.isTouchMove = false;
          this.setData({
            scrollY: false,
          });
        }
      }
    });
    //  更新数据
    that.setData({
      items: that.data.items,
    });
  },
  touchend(e) {
    this.setData({
      scrollY: true,
    });
  },
  // 计算滑动角度
  // 方向的判断，以起点做平面坐标系，与终点连线做直线，直线与x正半轴计算角度；我们以45度角为方向分割线，如：只要滑动角度大于等于45度且小于135度，则判断它方向为向上滑。
  getSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
  },
  // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
  getSlideDirection(startX, startY, endX, endY) {
    const dy = this.data.startY - this.data.endY;
    const dx = this.data.endX - this.data.startX;
    let result = 0;

    // 如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result;
    }

    const angle = this.getSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
      result = 4;
    } else if (angle >= 45 && angle < 135) {
      result = 1;
    } else if (angle >= -135 && angle < -45) {
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    }

    return result;
  },
  //  删除事件
  del(e) {
    // const self = this;
    const {
      addressid,
      index,
    } = e.currentTarget.dataset;
    this.setData({
      visible: true,
      delInfo: {
        addressid,
        index,
      },
    });
  }
});