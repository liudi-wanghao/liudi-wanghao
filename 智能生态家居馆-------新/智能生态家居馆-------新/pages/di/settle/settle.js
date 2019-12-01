// pages/di/settle/settle.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		arr:[],//接收数据
		Allprice:""//总价格
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		console.log(options.account)
		let arr = JSON.parse(options.account) 
		this.setData({
			arr
		})
		
	},
	//
	take() {
		wx.navigateTo({
			url: '/pages/di/take/take'
		})
	},
	
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		console.log(this.data.arr)
		let num=0
		this.data.arr.forEach(item=>{
			return num = item.num * item.price
		})
		this.setData({
			Allprice:num
		})
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
