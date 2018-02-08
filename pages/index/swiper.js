Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    imageUrls: ['http://img.zcool.cn/community/01711b59426ca1a8012193a31e5398.gif',
      'http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
      'http://img.zcool.cn/community/0123125936684ba8012193a3a0ce9e.jpg@1280w_1l_2o_100sh.jpg',
      'http://pic.58pic.com/58pic/12/07/05/08j58PIC7FA.jpg'],
    autoPlay:false,
    interval:2000,
    duration:500,
  },

  changeIndicatorDots:function(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoPlay:function(e){
    this.setData({
      autoPlay: !this.data.autoPlay
    })
  },

  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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