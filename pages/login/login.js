//login.js
var app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  getUserInfo: function (e) {
    console.log(e)
    if (e.detail.errMsg == 'getUserInfo:ok') {
      app.globalData.userInfo = e.detail.userInfo
      wx.reLaunch({
        url: '../index/index',
      })
      console.log(app.globalData.userInfo)
    }
  },

  onLoad: function (options) {
    console.log(app.globalData.userInfo)
  },

  onShow() {

  },

  onReady() {

  },

  onHide() {

  },

  onUnload() {

  },
})
