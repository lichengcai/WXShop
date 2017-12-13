var helloData = {
  name: 'WeChat',
  pass:12
}
var common = require("../../common/common.js");

//获取应用实例
var app = getApp();

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: 'MINA',
      pass:app.globalData.pass
    })
  },

  say:function(){
    common.sayHello(this.data.name);
  },
  
  onShwo(){
    console.log("")
  }
})