//app.js
App({
  onLaunch: function (options) {
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      fail: err => {
        console.log(err)
        wx.showModal({
          title: '提示',
          content: '微信的土豆服务器炸啦！' + err,
          showCancel: false
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(this.globalData.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: err => {
              console.log(err)
              wx.showModal({
                title: '提示',
                content: '微信的土豆服务器炸啦！' + err,
                showCancel: false
              })
            }
          })
        } else {
          wx.redirectTo({
            url: '../login/login',
          })
        }
      },
      fail: err => {
        console.log(err)
        wx.showModal({
          title: '提示',
          content: '微信的土豆服务器炸啦！' + err,
          showCancel: false
        })
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})