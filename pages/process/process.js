// pages/process/process.js
Page({

  /**
   * 页面的初始数据
   */


  data: {
    poker: [],
    taptime: '',
    washtime: '',
    CutPokerNum1: '',
    CutPokerNum2: '',
    DrawPokerNum1: '',
    DrawPokerNum2: '',
    DrawPokerNum3: '',
    poker1: 0,
    poker2: 0,
    poker3: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  /**
   * 取牌，获取一组乱序牌
   */
  getPoker: function() {

    var that = this;
    var numlist = []; //
    for (var i = 0; i < 22; i++) {
      numlist[i] = i + 1
    } //一个顺序数组 1 2 ··· 20 21 22

    var poker = [];
    for (var i = 0; i < 22; i++) {
      poker[i] = [];
      var n = Math.floor(Math.random() * (22 - i)) //0~21中随机数，即numlist中剩余数任选一个
      // console.log(n, numlist[n])
      poker[i][0] = numlist[n];
      numlist.splice(n, 1); //正序数列中删除此数字
      //随机定义此张牌正与倒
      poker[i][1] = Math.floor(Math.random() * 2);
    }
    console.log("原始牌" + poker)
    this.setData({
      poker: poker,
      poker1: 0,
      poker2: 0,
      poker3: 0,
    })
  },
  /**
   * 洗牌
   */
  bindTouchStart: function(e) {
    this.startTime = e.timeStamp;
    // console.log("s:" + this.startTime)
  },
  bindTouchEnd: function(e) {
    this.endTime = e.timeStamp;
    //console.log("e:" + this.endTime)
  },

  washPoker: function() {
    var taptime = this.endTime - this.startTime
    var washtime = Math.round(taptime / 100)
    /* parseInt(taptime / 100)//向下取整
     * Math.ceil(taptime / 100)//向上取整
     * Math.round(taptime / 100)//四舍五入
     */
   // console.log("taptime:" + taptime)

    var that = this
    var newpoker = that.data.poker
    var len = newpoker.length

    //洗牌方法一
    for (var i = 0; i < washtime; i++) {
      for (var j = len - 1; j > 0; j--) {
        var a = Math.floor(Math.random() * (len - j));
        var temp = newpoker[j];
        newpoker[j] = newpoker[a];
        newpoker[a] = temp;
        newpoker[j][1] = Math.floor(Math.random() * 2);
      }
      console.log("第" + (i + 1)+ "次洗牌" + newpoker)
    }


    this.setData({
      poker: newpoker,
      taptime: taptime,
      washtime: washtime,
    })

  },
  /**
   * 切牌
   */
  cutPokerNum1: function(e) {
    var that = this
    that.setData({
      CutPokerNum1: e.detail.value
    })
  },

  
  cutPokerNum2: function(e) {
    var that = this
    that.setData({
      CutPokerNum2: e.detail.value
    })
  },
  cutPoker: function() {
    var that = this
    var poker = that.data.poker
    var num1 = that.data.CutPokerNum1
    var num2 = that.data.CutPokerNum2

    var slice1 = poker.slice(0, num1)
    var slice2 = poker.slice(num1, num2)
    var slice3 = poker.slice(num2)

    console.log("切牌第一组:" + slice1)
    console.log("切牌第二组:" + slice2)
    console.log("切牌第三组:" + slice3)

    //切牌：把牌组顺序变为321
    var newpoker = slice3

    //console.log(newpoker)
    var current_length = newpoker.length
    for (var i = 0; i < slice2.length; i++) {
      newpoker[current_length + i] = slice2[i]
    }
    //console.log(newpoker)

    current_length = newpoker.length
    for (var i = 0; i < slice1.length; i++) {
      newpoker[current_length + i] = slice1[i]
    }
    console.log("切牌："+newpoker)


    this.setData({
      poker: newpoker,
    })

  },
  /**
   * 抽牌
   */
  drawPokerNum1: function(e) {
    var that = this
    that.setData({
      DrawPokerNum1: e.detail.value
    })
  },
  drawPokerNum2: function(e) {
    var that = this
    that.setData({
      DrawPokerNum2: e.detail.value
    })
  },
  drawPokerNum3: function(e) {
    var that = this
    that.setData({
      DrawPokerNum3: e.detail.value
    })
  },

  drawPoker: function() {

    var that = this
    var poker = that.data.poker

    var poker1 = poker[that.data.DrawPokerNum1 - 1];
    var poker2 = poker[that.data.DrawPokerNum2 - 1];
    var poker3 = poker[that.data.DrawPokerNum3 - 1];

    this.setData({
      poker: poker,
      poker1: poker1,
      poker2: poker2,
      poker3: poker3
    })
  },




  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})