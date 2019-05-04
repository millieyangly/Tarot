// pages/result/result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showpoker: app.globalData.showpoker,
    cardspread: app.globalData.cardspread,
    card: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let that = this
    that.setData({
      showpoker: app.globalData.showpoker
    })
    console.log(that.data.showpoker)

    console.log('onLoad')



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')

    let that = this
    let showpoker = that.data.showpoker
    let len = showpoker.length
    let card = []


    for (let i = 0; i < len; i++) {
      console.log(showpoker[len - i - 1])
      let a = wx.createAnimation()
      a
        .translate(0, i * 200 - 50)
        .rotateZ(180 * showpoker[len - i - 1][1])
        .step()
      card = [{
        id: i,
        name: a.export(),
        bg: "/pic/card/" + showpoker[len - i - 1][0] + ".jpg",
      }].concat(card)
    }


    this.setData({
      card: card
    })

    console.log(that.data.card)

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
    console.log('8')
  },

  toindex:function(){

    wx.reLaunch({
      url: '../index/index',
    })


  }
})