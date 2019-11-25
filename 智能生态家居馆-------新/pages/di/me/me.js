// pages/di/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//事件
  onDiscounts(){
  wx.navigateTo({
    url:"/pages/my/discounts/discounts"
  })
},
  onCollect() {
    wx.navigateTo({
      url: "/pages/my/collect/collect"
    })
  },
  onHistory() {
    wx.navigateTo({
      url: "/pages/my/history/history"
    })
  },
  onService() {
    wx.navigateTo({
      url: "/pages/my/service/service"
    })
  }
})