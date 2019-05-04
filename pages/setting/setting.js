  // pages/setting/setting.js
  const app = getApp()

  Page({

    /**
     * 页面的初始数据
     */
    data: {
      WH: app.globalData.WH * 750 / app.globalData.WW,
      WHC: app.globalData.WH * 750 / app.globalData.WW - 120,
      pokernum: {
        title: "占卜使用张数",
        bind0: "change_pokernum0",
        bind1: "change_pokernum1",
        radio: app.globalData.pokernum,
        text0: 78,
        text1: 22,
      },
      cutmethod: {
        title: "切牌设定",
        bind0: "change_cutmethod0",
        bind1: "change_cutmethod1",
        radio: app.globalData.cutmethod,
        text0: "手动切牌两次",
        text1: "电脑切牌两次",
      },
      washdirection: {
        title: "牌堆旋转方向",
        bind0: "change_washdirection0",
        bind1: "change_washdirection1",
        radio: app.globalData.washdirection,
        text0: "向左边旋转",
        text1: "向右边旋转",
      },

      drawmethod: {
        title: "选牌方式",
        bind0: "change_drawmethod0",
        bind1: "change_drawmethod1",
        radio: app.globalData.drawmethod,
        text0: "自己选牌",
        text1: "电脑选牌",
      },


    },

    change_pokernum0: function() {
      var that = this
      var change = "pokernum.radio"
      that.setData({
        [change]: 0,
      })
    },
    change_pokernum1: function() {
      var that = this
      var change = "pokernum.radio"
      that.setData({
        [change]: 1,
      })
    },
    change_cutmethod0: function() {
      var that = this
      var change = "cutmethod.radio"
      that.setData({
        [change]: 0,
      })
    },
    change_cutmethod1: function() {
      var that = this
      var change = "cutmethod.radio"
      that.setData({
        [change]: 1,
      })
    },
    change_washdirection0: function() {
      var that = this
      var change = "washdirection.radio"
      that.setData({
        [change]: 0,
      })
    },
    change_washdirection1: function() {
      var that = this
      var change = "washdirection.radio"
      that.setData({
        [change]: 1,
      })
    },
    change_drawmethod0: function() {
      var that = this
      var change = "drawmethod.radio"
      that.setData({
        [change]: 0,
      })
    },
    change_drawmethod1: function() {
      var that = this
      var change = "drawmethod.radio"
      that.setData({
        [change]: 1,
      })
    },

    bindButtonOk: function() {
      app.globalData.pokernum = this.data.pokernum.radio;
      app.globalData.cutmethod = this.data.cutmethod.radio;
      app.globalData.washdirection = this.data.washdirection.radio;
      app.globalData.drawmethod = this.data.drawmethod.radio;

      console.log(this.data.pokernum.radio, this.data.cutmethod.radio, this.data.washdirection.radio, this.data.drawmethod.radio)

      console.log(app.globalData.pokernum, app.globalData.cutmethod, app.globalData.washdirection, app.globalData.drawmethod )
      wx.navigateTo({
        url: '../divine/divine'
      })


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

    },




  })