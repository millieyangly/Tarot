// pages/catalog/catalog.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    WH: app.globalData.WH * 750 / app.globalData.WW,
    basic: {
      item_tap: "tap_basic",
      item_img: "../../pic/cat_basic.png",
      item_text: "基础牌阵 BASIC",
    },
    yn_basic: 0,
    sub_basic: [{
      sub_item_title: "tap_basic1",
      sub_item_text: "万用阵单张：快速分析问题 问卜者自定义牌位",
      sub_item_desc: "问卜者自定义任何与问题有关的人事物时地缘心因果",
    }, {
      sub_item_title: "tap_basic2",
      sub_item_text: "万用阵三张：快速分析问题 问卜者自定义牌位",
      sub_item_desc: "问卜者自定义任何与问题有关的人事物时地缘心因果",
    }, {
      sub_item_title: "tap_basic3",
      sub_item_text: "圣三角：适用于问题过程分析与结果预测",
      sub_item_desc: "1.过去\n2.现在\n3.未来",
    }, {
      sub_item_title: "tap_basic4",
      sub_item_text: "钻石展开：适用于问题过程分析与结果预测"
    }, ],

    love: {
      item_tap: "tap_love",
      item_img: "../../pic/cat_love.png",
      item_text: "情感 LOVE",
    },
    yn_love: 0,
    sub_love: [{
      sub_item_title: "tap_love1",
      sub_item_text: "灵感对应：适用于了解彼此内心的看法"
    }, {
      sub_item_title: "tap_love2",
      sub_item_text: "维纳斯之爱：适用于两人关系发展的分析"
    }, {
      sub_item_title: "tap_love3",
      sub_item_text: "恋人未满：适用于还不是恋人关系的发展分析"
    }, {
      sub_item_title: "tap_love4",
      sub_item_text: "何处遇见他：适用于想脱单的问卜者"
    }, {
      sub_item_title: "tap_love5",
      sub_item_text: "爱之门：适用于一段恋情的探索"
    }, {
      sub_item_title: "tap_love6",
      sub_item_text: "复合可能：适用于与旧人复合的可能性分析"
    }, {
      sub_item_title: "tap_love7",
      sub_item_text: "爱十字：对于彼此关系状况与结果分析"
    }, {
      sub_item_title: "tap_love8",
      sub_item_text: "分手抉择：是否应该分手以及如何分手分析"
    }],

    choice: {
      item_tap: "tap_choice",
      item_img: "../../pic/cat_choice.png",
      item_text: "做选择 CHOICE",
    },
    yn_choice: 0,
    sub_choice: [{
      sub_item_title: "tap_choice1",
      sub_item_text: "钻石二选一：适用于两种状况选择其一"
    }, {
      sub_item_title: "tap_choice2",
      sub_item_text: "应该不应该：针对做选择前的状况分析"
    }, {
      sub_item_title: "tap_choice3",
      sub_item_text: "马蹄铁：适用于目前状况与最佳选择的深度分析"
    }, ],

    question: {
      item_tap: "tap_question",
      item_img: "../../pic/cat_question.png",
      item_text: "深度分析 QUESTION",
    },
    yn_question: 0,
    sub_question: [{
      sub_item_title: "tap_question1",
      sub_item_text: "五芒星：针对问题状况与成因分析"
    }, {
      sub_item_title: "tap_question2",
      sub_item_text: "六芒星：适用于问题整体分析"
    }, {
      sub_item_title: "tap_question3",
      sub_item_text: "问题解决：针对问题成因分析与如何解决"
    }, {
      sub_item_title: "tap_question4",
      sub_item_text: "珍珠项链：针对如何处理问题的深度分析"
    }, {
      sub_item_title: "tap_question5",
      sub_item_text: "凯尔特十字：针对问题环境与障碍分析"
    }, ],

    showModal: 0,
    modalImg: 0,
    modalText: 0,
    formation: 0, //最终选择牌型



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


  /**
   * 点击事件
   */
  tap_basic: function(e) {
    var that = this;
    if (that.data.yn_basic) {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 0,
      })
    } else {
      that.setData({
        yn_love: 0,
        yn_basic: 1,
        yn_choice: 0,
        yn_question: 0
      })
    }
  },
  tap_love: function(e) {
    var that = this;
    if (that.data.yn_love) {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 0
      })
    } else {
      that.setData({
        yn_love: 1,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 0
      })
    }
  },
  tap_choice: function(e) {
    var that = this;
    if (that.data.yn_choice) {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 0
      })
    } else {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 1,
        yn_question: 0
      })
    }
  },
  tap_question: function(e) {
    var that = this;
    if (that.data.yn_question) {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 0
      })
    } else {
      that.setData({
        yn_love: 0,
        yn_basic: 0,
        yn_choice: 0,
        yn_question: 1
      })
    }
  },

  item_tap: function(e) {
    var that = this
    var ob = e.currentTarget.dataset.tapcontent;
    var subTitle = ob.substring(4)
    var modalImg = "/pic/svg/" + subTitle + ".svg"
    var modalText;

    switch (subTitle) {
      case 'basic1':
        this.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: "问卜者自定义任何与问题有关的人事物时地缘心因果",
          showModal: true
        });
        break;
      case 'basic2':
        this.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: "问卜者自定义任何与问题有关的人事物时地缘心因果",
          showModal: true
        })
        break;
      case 'basic3':
        this.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: "1.过去\n2.现在\n3.未来",
          showModal: true
        })
        break;
      case 'basic4':
        this.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1.过去\n2、3现在\n4.未来',
          showModal: true
        })
        break;
      case 'love1':
        modalText = that.data.sub_love[0].sub_item_desc;
        this.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你对对方的看法\n2 对方对你的看法\n3 你认为目前双方的关系\n4 对方认为目前双方的关系\n5 你期望未来双方关系发\n6 对方期望未来双方关系发展',
          showModal: true
        })
        break;
      case 'love2':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 询问者行动表现\n2 对方行动表现\n3 环境外界影响\n4 目前发展状况\n5 阻碍和帮助\n6 询问者内心想法\n7 对方内心想法\n8 结果',
          showModal: true
        })
        break;
      case 'love3':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你对对方的看法\n2 对方对你的看法\n3 你对对方的行动\n4 对方对你的行动\n5 你对彼此关系的期望\n6 对方对彼此关系的期望\n7 帮助或阻碍\n8 未来发展',
          showModal: true
        })
        break;
      case 'love4':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 学校或文教地点\n2 社团或工作地点\n3 运动或娱乐地点\n4 由朋友介绍\n5 由亲戚介绍\n6 相亲或联谊认识\n7 网络认识\n8 旅行或交通工具上认识',
          showModal: true
        })
        break;
      case 'love5':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你在这段关系的状况\n2 你希望在这段关系中得到什么\n3 你在这段关系中的阻碍\n4 你在这段关系中需要承担的\n5 对方对你的看法\n6 与对方最佳的相处方式\n7 未来关系的发展',
          showModal: true
        })
        break;
      case 'love6':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你和对方的过去\n2 你现在状况\n3 对方现在的状况\n4 你对复合的感受\n5 对方对复合的感受\n6 阻碍你的 7 帮助你的\n8 你所不知道的事\n9 未来发展',
          showModal: true
        })
        break;
      case 'love7':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你现在的心情\n2 对方对你的态度\n3 你们现在的状态\n4 外在环境的影响\n5 结果与发展',
          showModal: true
        })
        break;
      case 'love8':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 你的心情 2 他的心情\n3 选择分手要考虑的事情\n4 选择分手的影响或短期的发展\n5 选择继续要考虑的事\n6 选择继续的影响或短期发展\n7 你所不知道的事\n8 选择分手时建议采取的分手方式',
          showModal: true
        })
        break;
      case 'choice1':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 现状\n2 选择A的发展一\n3 选择B的发展一\n4 选择A的发展二\n5 选择B的发展二\n6 选择A的结果\n7 选择B的结果',
          showModal: true
        })
        break;
      case 'choice2':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 2 3 依照心中想法去做可能发生的\n4 5 6 维持现状可能会发生的\n7 改变后的结果\n8 维持现状的结果\n9 做决定之前必须知道的',
          showModal: true
        })
        break;
      case 'choice3':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 自己的心态 2 过去的状况\n3 现在的状况 4 未来的状况\n5 最佳的选择 6 环境的影响\n7 遭遇的问题 8 最后的结果',
          showModal: true
        })
        break;
      case 'question1':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 问题的现状\n2 问题的成因与重点\n3 应考虑的因素\n4 解答与忠告\n5 结果',
          showModal: true
        })
        break;
      case 'question2':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 过去 2 现在 3 未来\n4 行动 5 环境 6 内心\n7 结果',
          showModal: true
        })
        break;
      case 'question3':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 问题发生原因\n2 问题现状\n3 环境\n4 可能的阻碍和帮助\n5 问题解决方式',
          showModal: true
        })
        break;
      case 'question4':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '0 关心的焦点 1 内心动机\n2 要解决的问题\n3 盲点 4 该如何行动\n5 处理的最佳方法\n6 长期发展的指引\n7 结果',
          showModal: true
        })
        break;
      case 'question5':
        that.setData({
          formation: subTitle,
          modalImg: modalImg,
          modalText: '1 问题现状\n2 障碍或援助\n3 理想 4 内心\n5 过去 6 未来\n7 行动状况 8 环境\n9 愿望与恐惧 10 结果',
          showModal: true
        })
        break;
      default:
        "未定";
        break;
    }
  },

  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function() {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件,跳转页面
   */
  onConfirm: function() {
    var that = this;
    this.hideModal();
    console.log(that.data.formation)
    app.globalData.cardspread=that.data.formation
    console.log(app.globalData.cardspread)
    wx.navigateTo({
      url: "/pages/setting/setting"//?formation=" + that.data.formation
    })

  }
})