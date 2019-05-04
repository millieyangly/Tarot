// pages/divine/divine.js

const app = getApp()
Page({

  /**页面的初始数据
   * 
   */
  data: {


    //这里设置效果待定
    pokernum: 78 - 56 * app.globalData.pokernum, //牌数目 78/22
    washdirection: 2 * app.globalData.washdirection - 1, //洗牌方向 0:左，1:右
    cutmethod: app.globalData.cutmethod, //切牌方式 0:手动，1:自动
    drawmethod: app.globalData.drawmethod, //抽牌方式 0:手动，1:自动
    cardspread: app.globalData.cardspread, //牌阵选择


    poker: [], //牌 二维数组
    showpoker: [], //最后结果牌 二维数组

    //切牌点 2个
    cutPoint: [],

    //抽牌点 10个
    drawPoint: [],
    drawPointP: 0, //剩余抽牌数

    step: 0, //占卜过程步骤控制按钮0 1 2 3 4 5  // -1 时 为无按钮状态

    //牌动画效果
    card: [{
      id: 0,
      name: wx.createAnimation(),
      degree: 0, // 旋转角度
      bg: "/pic/0.png", // 背景图片
      x: 0, // x位置
      y: 0, // y位置
    }, ],

    setInter: '', //洗牌不间断
  },

  /**生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


    this.setData({
      pokernum: 78 - 56 * app.globalData.pokernum, //牌数目 78/22
      washdirection: 2 * app.globalData.washdirection - 1, //洗牌方向 0:左，1:右
      cutmethod: app.globalData.cutmethod, //切牌方式 0:手动，1:自动
      drawmethod: app.globalData.drawmethod, //抽牌方式 0:手动，1:自动
      cardspread: app.globalData.cardspread, //牌阵选择

    })

    let that = this
    let pokernum = that.data.pokernum
    let card = []

    console.log(pokernum)


    //自动计算切牌点和抽牌点

    that.process1() //牌 内容
    that.drawPointFunc(),
      that.cutPointFunc(),
      that.setData({
        cutPoint: that.cutPointFunc(),
        // drawPoint: that.drawPointFunc(),
      })



    //初始化 所有牌的动画
    for (let i = 0; i < pokernum; i++) {
      card = [{
        id: i,
        name: wx.createAnimation(),
        degree: 0,
        bg: "/pic/0.png",
        x: 0, // x位置
        y: 0, // y位置
      }].concat(card) // concat 连接两个数组

      // console.log(card)

      this.setData({
        card: card,
      })
    }

   // console.log(app.globalData.pokernum, app.globalData.cutmethod, app.globalData.washdirection, app.globalData.drawmethod, app.globalData.cardspread)

  //  console.log(that.data.pokernum, that.data.cutmethod, that.data.washdirection, that.data.drawmethod, that.data.cardspread)

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


  /**
   * 具体动画效果区
   */
  //启动洗牌 step 0->1
  washstart: function(e) {

    this.startTime = e.timeStamp; //记录开始时间
    let that = this;
    let dir = that.data.washdirection; //洗牌方向 1 -> 1 右 0->-1 左
    console.log(that.data.washdirection)
    console.log(dir)
    let pokernum = that.data.pokernum;
    //let t =0 

    that.data.setInter = setInterval(function() {

      for (let i = 1; i < pokernum + 1; i++) {
        let j = i - 1
        let d = dir * 30 * i * (0.1) + that.data.card[j].degree; //角度值 下面 弧度值 
        let l = 2 * Math.PI / 360 * d;
        let x = Math.sin(l) * 100 //+ 50 * Math.random() - 25;
        let y = Math.cos(l) * 100 //+ 50 * Math.random() - 25;
        let a = wx.createAnimation()
        a
          .translate(y, x)
          .rotate(d) //+ Math.random() * 60
          .step({
            duration: 3000
          })

        that.setData({
          ['card[' + j + '].name']: a.export(),
          ['card[' + j + '].degree']: d,
          step: 1,
        })
      }
    }, 1000)

  },

  //结束洗牌
  washend: function(e) {

    let that = this;
    that.endTime = e.timeStamp;
    // console.log("倒计时暂停")
    clearInterval(that.data.setInter)
    let pokernum = that.data.pokernum;
    for (let i = 0; i < pokernum; i++) {

      let a = wx.createAnimation()
      a.step({
        duration: 300
      })

      that.setData({
        ['card[' + i + '].name']: a.export(),
        ['card[' + i + '].degree']: 0,
      })
    }

    that.process2() // 洗牌算法

    that.setData({
      step: 2,
    })
    //that.process()

  },

  //开始切牌
  cutstart: function() {
    let that = this;

    console.log("开始切牌")
    let pokernum = that.data.pokernum;

    let cutPoint1 = that.data.cutPoint[0]
    let cutPoint2 = that.data.cutPoint[1]

    //切牌动画效果
    for (let i = 0; i < pokernum; i++) {

      let a = wx.createAnimation()
      if (i < cutPoint1) {
        a

          .translate(-100 + i * 2, -100 + i * 2)
          .step({
            duration: 1000,
            timingFunction: 'ease-in-out',
            delay: 100,
          })
          //.rotate(0, 0)
          .translate(0, 0)
          .step({
            duration: 500,
            delay: 500,
          })
      }

      if (i >= cutPoint2) {
        a
          .translate(100 - i * 2, 100 - i * 2)
          .step({
            duration: 1100,
            timingFunction: 'ease-in-out',
            delay: 100,
          })
          .translate(100, 100)
          .step()
          .rotate(0, 0)
          // .scale(1)
          .translate(0, 0)
          // .skew(0, 0)
          .step({
            duration: 300,
            delay: 500,
          })
      }

      that.setData({
        ['card[' + i + '].name']: a.export(),
        cutPoint1: cutPoint1,
        cutPoint2: cutPoint2,
      })
    }


    that.setData({
      step: 3,
    })

    that.process3() // 切牌算法
  },

  //结束切牌---确认切牌
  cutend: function() {

  },


  //开始抽牌
  drawstart: function() {
    let that = this;
    console.log("开始抽牌")
    let pokernum = that.data.pokernum;

    let x = -2
    let y = -1

    for (let i = 0; i < pokernum; i++) {

      if (x == 3) {
        x = -2
        y = y + 1
      }
      let a = wx.createAnimation()

      a
        .scale(0.6)
        .translate(x * 100, y * 200)
        .step({
          duration: 500
        })

      that.setData({
        ['card[' + i + '].name']: a.export(),
        ['card[' + i + '].x']: x * 100,
        ['card[' + i + '].y']: y * 200,
        step: 5
      })

      x = x + 1
    }
  },


  //抽牌，点击牌，显示结果
  cardbutton: function(e) {

    let that = this
    let pocknum = that.data.pokernum
    let poker = that.data.poker

    let id = pocknum - e.target.id - 1
    let x = that.data.card[id].x
    let y = that.data.card[id].y
    let checknum = 0 // 检查是否重复翻牌

    let showpoker = that.data.showpoker

    let drawPointP = that.data.drawPointP
   // console.log(e.target.id, showpoker.length)
    if (that.data.step == 5 && drawPointP > 0) {

      for (let i = 0; i < showpoker.length ; i++) {
      //  console.log(poker, showpoker)
        //console.log(poker[id][0], showpoker[i][0])
        if (poker[id][0] == showpoker[i][0]) {
          checknum = checknum + 1
        }
      }
      if (checknum == 0) {
        showpoker = [[
           poker[id][0],
        poker[id][1]
        ]].concat(showpoker)
        drawPointP = drawPointP - 1
      }
     // console.log(showpoker)

      let a = wx.createAnimation()
      a
        .scale(0.6)
        .translate(x, y)
        .rotateY(180)
        .rotateX(360 + 180 * poker[id][1])
        .backgroundColor('grey')
        .step({
          duration: 300
        })
        .rotateY(360)
        .step({
          duration: 300
        })


      this.setData({
        ['card[' + id + '].name']: a.export(),
        ['card[' + id + '].bg']: "/pic/card/" + poker[id][0] + ".jpg",
        drawPointP: drawPointP,
        showpoker: showpoker,
      })



    }
  },


  //结束抽牌---确认抽牌---显示结果
  drawend: function() {

    let that = this;

    console.log("确认抽牌")

    let pokernum = that.data.pokernum;
    let drawPoint = that.data.drawPoint;
    let drawlen = drawPoint.length;
    let hl = drawlen / 2;
    let showpoker = that.data.showpoker;

    for (let i = 0; i < pokernum; i++) {

      for (let j = 0; j < 6; j++) {
        let a = wx.createAnimation()

        a
          .scale(0.6)
          .translate(-375, 0)
          .backgroundColor('grey')
          .step({
            duration: 500
          })

      }
    }

  },


  
  cardroads: function() {


  },

  //结束占卜
  endp: function() {

    console.log('end')
    let that=this

    app.globalData.showpoker = that.data.showpoker

    console.log(that.data.showpoker, that.data.cardspread)

    if(that.data.drawPoint.length==that.data.showpoker.length){
// wx.reLaunch
    wx.redirectTo({
      url: '../result/result'
      })
    }
  },



  /**
   * 
   * 算法部分
   * 
   */
  //占卜初始化
  process1: function() {

    //取牌
    let that = this;
    let numlist = []; //
    let pokernum = that.data.pokernum;


    for (let i = 0; i < pokernum; i++) {
      numlist[i] = i + 1
    } //一个顺序数组 1 2 ··· 20 21 22

    let poker = [];
    for (let i = 0; i < pokernum; i++) {
      poker[i] = [];
      let n = Math.floor(Math.random() * (pokernum - i)) //0~21中随机数，即numlist中剩余数任选一个
      poker[i][0] = numlist[n];
      numlist.splice(n, 1); //正序数列中删除此数字
      //随机定义此张牌正与倒
      poker[i][1] = Math.floor(Math.random() * 2);
    }
    console.log("原始牌" + poker)

    that.setData({
      poker: poker,
    })
  },

  //占卜洗牌
  process2: function() {
    //取牌
    let that = this;
    let numlist = []; //
    let pokernum = app.globalData.pokernum;
    let poker = that.data.poker

    //洗牌

    let taptime = this.endTime - this.startTime
    let washtime = Math.round(taptime / 100)
    // console.log("taptime:" + taptime)
    let len = poker.length

    //洗牌方法一
    for (let i = 0; i < washtime; i++) {
      for (let j = len - 1; j > 0; j--) {
        let a = Math.floor(Math.random() * (len - j));
        let temp = poker[j];
        poker[j] = poker[a];
        poker[a] = temp;
        poker[j][1] = Math.floor(Math.random() * 2);
      }
      // console.log("第" + (i + 1) + "次洗牌" + poker)
    }
    console.log("洗牌：" + poker)
    that.setData({
      poker: poker,
    })
  },

  //占卜切牌
  process3: function() {
    //取牌
    let that = this;
    let numlist = []; //
    let pokernum = app.globalData.pokernum;
    let poker = that.data.poker

    //切牌   
    let num1 = that.data.cutPoint[0]
    let num2 = that.data.cutPoint[1]

    let slice1 = poker.slice(0, num1)
    let slice2 = poker.slice(num1, num2)
    let slice3 = poker.slice(num2)

    //切牌：把牌组顺序变为321
    let newpoker = slice3
    let current_length = newpoker.length
    for (let i = 0; i < slice2.length; i++) {
      newpoker[current_length + i] = slice2[i]
    }

    current_length = newpoker.length
    for (let i = 0; i < slice1.length; i++) {
      newpoker[current_length + i] = slice1[i]
    }

    poker = newpoker

    console.log("切牌：" + poker)

    that.setData({
      poker: poker,
    })
  },


  //占卜抽牌 仅供自动抽牌
  process4: function() {
    wx.cloud.init()
    //取牌
    let that = this;
    let numlist = []; //
    let pokernum = app.globalData.pokernum;
    let poker = that.data.poker

    //抽牌

    let drawlen = that.data.drawPoint.length; //抽牌数

    let showpoker = [drawlen];

    for (let i = 0; i < drawlen; i++) {

      showpoker[i] = poker[that.data.drawPoint[i]]
      wx.cloud.downloadFile({
        fileID: 'cloud://onlinetarot-1.6f6e-onlinetarot-1/pic/card/' + showpoker[i][0] + '.jpg',
        success: res => {
          showpoker[i][0] = res.tempFilePath
          console.log('cloud:', i)
          this.setData({
            showpoker: showpoker,
            step: 3,
          })
        },
        fail: err => {
          console.log(err)
        }
      })
    }

    console.log('p-end')

  },

  //牌阵算法
  spread: function() {


  },


  //计算切牌点
  cutPointFunc: function() {
    let cp = [];
    let num = app.globalData.pokernum;
    cp[0] = Math.round(Math.random() * (num - 2)) + 1;
    cp[1] = Math.round(Math.random() * (num - 2)) + 1; //避免切牌点为0

    if (cp[0] == cp[1]) {
      switch (cp[0]) {
        case 0:
          cp[1] = cp[1] + 1;
          break;
        default:
          cp[1] = cp[1] - 1;
          break;
      }
    }

    if (cp[1] < cp[0]) {
      let temp = cp[0]
      cp[0] = cp[1]
      cp[1] = temp
    }

    return cp
  },


  //计算抽牌点
  drawPointFunc: function() {
    console.log('drawPointFunc')

    let that = this
    let dp = [10];
    let num = that.data.pokernum;
    let spread = that.data.cardspread;
    let numlist = [];
    console.log(spread)

    //一个顺序数组
    for (let i = 0; i < num; i++) {
      numlist[i] = i
    }

    for (let j = 0; j < 10; j++) {
      let n = Math.round(Math.random() * (num - j)) //0~21中随机数，即numlist中剩余数任选一个
      dp[j] = numlist[n];

      numlist.splice(n, 1); //正序数列中删除此数字
    }

    switch (spread) {
      case 'basic1': //1
        dp.splice(1)
        break;
      case 'basic2':
      case 'basic3': //3
        dp.splice(3)
        break;
      case 'basic4': //4
        dp.splice(4)
        break;
      case 'love7':
      case 'question1':
      case 'question3': //5
        dp.splice(5)
        break;
      case 'love1': //6
        dp.splice(6)
        break;
      case 'love5':
      case 'choice1':
      case 'question2': //7
        dp.splice(7)
        break;
      case 'love2':
      case 'love3':
      case 'love4':
      case 'love8':
      case 'choice3':
      case 'question4': //8
        dp.splice(8)
        break;
      case 'love6':
      case 'choice2': //9
        dp.splice(9)
        break;
      case 'question5': //10
        break;
      default:
        console.log('牌阵不正确')
        break;
    }

    console.log("dp:" + dp + ', len:', +dp.length)

    that.setData({
      drawPoint: dp,
      drawPointP: dp.length

    })


    // return dp

  },


})