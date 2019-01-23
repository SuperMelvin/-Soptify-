//login.js
var app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  getUserInfo: function (e) {
    console.log('微信登录--------')
    console.log(e)
    if (e.detail.errMsg == 'getUserInfo:ok') {
      app.globalData.userInfo = e.detail.userInfo
      wx.reLaunch({
        url: '../index/index',
      })
      console.log('获取用户信息成功--------')
      console.log(app.globalData.userInfo)
    }
  },

  onLoad: function (options) {
    console.log('查看用户信息--------')
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
