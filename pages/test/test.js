// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"lichengcai",
    id:8,
    arr:[1,2,3,4,5],
    obj1:{
      a:3,
      b:5
    }
  },

  outterTap: function (event) {
    console.log(event);
    console.log("触发了outter 的tap事件");
  },
  middleTap: function (event){
    console.log(event);
    console.log("触发了middle 的tap事件");
  },
  innerTap: function (event) {
    console.log(event);
    console.log("触发了inner 的tap事件");

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})