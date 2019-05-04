// pages/test/test.js
Page({
  data: {
    card: [{
      id: 0,
      name: wx.createAnimation(),
      degree: 0,
      bg: "/pic/0.png",
    }, {
        id: 0,
        name: wx.createAnimation(),
        degree: 0,
        bg: "/pic/0.png",
      }],
   
    cardid:2
   
  },

  onReady: function () {
    let that = this
    let pokernum = 22;


    console.log(that.data.cutPoint, that.data.drawPoint)

    for (let i = 1; i < pokernum; i++) {
      that.data.card = [{
        id: i,
        name: wx.createAnimation(),
        degree: 0,
        bg: "/pic/0.png",
      }].concat(this.data.card)
      that.setData({
        card: this.data.card
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


 
  testbutton:function(e){

    console.log(e)

  },

  washstart: function (e) {

    this.startTime = e.timeStamp; //记录开始时间
    let that = this;
    let dir = that.data.washdirection; //洗牌方向 ？？暂未确定算法
    let pokernum = that.data.pokernum;

    that.data.setInter = setInterval(function () {
      // console.log('进入循环')
      for (let i = 0; i < pokernum; i++) {
        let d = 60 * Math.random() + that.data.card[i].degree; //角度值 下面 弧度值
        // if (d>360){d=d-360}
        let l = 2 * Math.PI / 360 * d;
        let x = Math.sin(l) * 100 //+ 50 * Math.random() - 25;
        let y = Math.cos(l) * 100 //+ 50 * Math.random() - 25;
        //  console.log(d,l,x,y)
        let a = wx.createAnimation()

        if (dir) {
          // if (d > 360) {
          //   d = d - 360
          // }
          a
            .translate(y, x)
            .rotate(d + Math.random() * 60)
            .step({
              duration: 1000
            })
        } else {
          a
            .translate(x, y)
            .rotate(d + Math.random() * 60)
            .step({
              duration: 1000
            })
        }

        that.setData({
          ['card[' + i + '].name']: a.export(),
          ['card[' + i + '].degree']: d,
          ['card[' + i + '].bg']: "/pic/0.png",
          step: 1,
        })
      }
    }, 250)

  },
 
})