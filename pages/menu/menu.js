
var config = require("../../common/config.js");
Page({
  data: {
    address:"正在获取地址..."
  },
  
  onLoad: function (options) {
    // 获取当前用户位置信息
    this.getLocation();
  },


  onReady: function () {
    // 页面渲染完成

  },

  onShow: function () {
    // 页面显示
   
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

// 获取当前用户位置信息
  getLocation:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.setData({
          address: res.latitude
        })
        that.getAddress(res.latitude, res.longitude);
      }
    })
  },

  //获取用户当前具体地址信息
  getAddress: function (latitude, longitude){
    var that = this;
    var qqMapApi = config.qqMapApi + "?location=" + latitude + ',' +
    longitude + "&key=" + config.qqUserkey + "&get_poi=1";
    var header = config.header;

    wx.request({
      url: qqMapApi,
      data: {

      },
      header: {
        header // 默认值
      },
      success: function (res) {
        console.log(res);
        getApp().globalData.address = res.data.result.address;
        console.log("网络位置信息： " + getApp().globalData.address);
        that.setData({
          address: res.data.result.address
        })
      }
    })
  }


})