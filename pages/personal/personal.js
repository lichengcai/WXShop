//获取应用实例
var app = getApp();

// Register a Page.
Page({
  data: {
    userInfo: {},
    location: ""
  },

  onLoad() {
    var that = this;
    app.getUserInfo(function (userInfo) {

      console.log("personal.js onLoad");
      console.log(userInfo);
      that.setData({
        userInfo: userInfo,
      })
    }),

      wx.request({
        url: 'http://127.0.0.1:8085/sell/buyer/product/list', //仅为示例，并非真实的接口地址
        data: {

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            location: res.data.msg
          })
        }
      })
  }
})