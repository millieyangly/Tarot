 //app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    try {
      var res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)

      this.globalData.WW = res.windowWidth;
      this.globalData.WH = res.windowHeight;
      console.log("log:app.js-onLaunch", this.globalData.WH)
    } catch (e) {
      // Do something when catch error
    }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    pokernum:1,//占卜使用张数 0:78 1:22
    cutmethod:1,//切牌设定 0:手动 1:电脑
    washdirection:1,//牌堆旋转方向 0:左 1:右
    drawmethod: 1,//选牌方式 0:手动 1:电脑
    cardspread: 'basic4',//牌阵 //默认0
    showpoker:[],
    WW: "",//屏幕可用宽度
    WH: "",//屏幕可用高度
  }
})