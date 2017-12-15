var order=["a","b","c"];
var index = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:"a",
    inter:5000,
    imgUrls : [
      'http://images.koolearn.com/kooupload/201708111042_1502419320348550.jpg_mobile.jpg',
      'https://images.koolearn.com/kooupload/201711281500_151185244253623.jpg_mobile.jpg',
      'http://images.koolearn.com/kooupload/201706151224_1497500683906349.jpg_mobile.jpg'
      ],
      
  },

  scrolltoupper:function(event) {
    console.log("触发了scrolltoupper");
    // console.log(event);
  },

  tapChange:function(){
    index++;
    if(index > order.length-1) {
      index =0; 
    }
    this.setData({
      toView:order[index]
    })
  },

  swipeChange:function(event){
    console.log(event);
  },

  intervalChange:function(e){
    console.log(e);
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